function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function recupDataJoueur(joueur,plateforme,region){;
  var url = "https://ow-api.com/v1/stats/"+plateforme+"/"+ region +"/"+ joueur +"/complete";
  console.log(url);
  ajaxGet(url,function (reponse){
      var result = $.parseJSON(reponse);
      var statQP = result.quickPlayStats.topHeroes;
      var ico = $('<img>').attr({
        src: result.icon,
        id: "imgProfil",
        class: "img-thumbnail"
      });
      var button = $('<span>').text('A jour !');
      var prestige = result.prestige;
      var level = $('<span>').text(prestige*100+result.level);
      $('#profilsBase').append(ico);
      $('#profilsBase').append(button);
      $('#profilsBase').append(level);
      var index=1;
      //console.log(statQP);
      for(heroName in statQP){
        let divStat = $('#hero'+index).attr({
          id: heroName
        });
        let divCarteHeros = $("<div>").attr({
          class: "carteHeroBase"
        });
        let divNomGame = $("<div>").attr({
          class:"nomGame"
        });
        let nomHeroHtml = $('<span>').attr({
          class: "nomHero"
        }).text(heroName.substr(0,1).toUpperCase() +	heroName.substr(1,heroName.length).toLowerCase());
        if (heroName === "soldier76"){
          $('<img>').attr({
            src: "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png",
            class: "imgHero"
          }).appendTo(divCarteHeros);
        }
        else if(heroName === "dVa"){
          $('<img>').attr({
            src: "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/hero-select-portrait.png",
            class: "imgHero"
          }).appendTo(divCarteHeros);
        }
        else{
          $('<img>').attr({
            src: "https://d1u1mce87gyfbn.cloudfront.net/hero/"+ heroName +"/hero-select-portrait.png",
            class: "imgHero"
          }).appendTo(divCarteHeros);
        }
        //console.log(statQP[heroName]);
        divNomGame.append(nomHeroHtml);
        divCarteHeros.append(divNomGame);
        divStat.append(divCarteHeros);
        $('<button>').attr({
          class:"glyphicon glyphicon-chevron-down",
          id: "afficheDetails"+heroName
        }).appendTo(divCarteHeros);
        $( "#afficheDetails"+heroName).click(function() {
          $('<div>').attr({
            id:"details"+heroName
          }).insertAfter("#"+heroName);
        });
        index++;
      }
})
}

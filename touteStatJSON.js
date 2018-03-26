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
      //Le json retourner par l'api
      var result = $.parseJSON(reponse);
      //Statistique des partie rapide
      var statQP = result.quickPlayStats.topHeroes;

      //Le joueur en général
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
      
      //Les nom des Heros et images
      for(heroName in statQP){
        let divStat = $('#hero'+index).attr({
          id: heroName,
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
          id: "afficheDetails" + heroName.substr(0,1).toUpperCase() +	heroName.substr(1,heroName.length).toLowerCase()
        }).appendTo(divCarteHeros);
        let aled = $("<div>").attr({
          id:"statsHero"+ heroName.substr(0,1).toUpperCase() +	heroName.substr(1,heroName.length).toLowerCase(),
          class:"statsDev"
        }).css('background-color','black').css('height','100px').css('display','none');
        divStat.after(aled);
        index++;
      }

      //Action sur les boutons pour les statistiques général des heros
      $("#afficheDetailsAna").click(function() {
        $('#statsHeroAna').animate({
          height: 'toggle'
        });
      });
})
}

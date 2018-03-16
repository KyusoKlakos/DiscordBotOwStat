var heros = ["ana","bastion","dVa","doomfist","genji","hanzo","junkrat","lucio","mccree","mei","mercy","moira","orisa","pharah","reaper","reinhardt","roadhog","soldier76",
"sombra","symmetra","torbjorn","tracer","widowmaker","zarya","zennyatta"];
console.log(heros);

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
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

function recupDataJoueur(joueur,plateforme,region){
  var url = "https://ow-api.com/v1/stats/"+plateforme+"/"+ region +"/"+ joueur +"/complete";
  console.log(url);
  ajaxGet(url,function (reponse){
      var result = $.parseJSON(reponse);
      var ico = $('<img>').attr({
        src: result.icon,
        id: "imgProfil",
        class: "img-thumbnail"
      });
      var button = $('<span></span>').text('A jour !');
      var prestige = result.prestige;
      var level = $('<p></p>').text(prestige*100+result.level);
      $('#profilsBase').append(ico);
      $('#profilsBase').append(button);
      $('#profilsBase').append(level);
      console.log(result.quickPlayStats.topHeroes.ana);
})
}

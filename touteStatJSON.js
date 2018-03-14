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
      var result = JSON.parse(reponse);
      var div = document.getElementById("profilsBase");
      var nom = document.createElement("h2");
      nom.textContent = result.name;
      var ico = document.createElement("img");
      ico.setAttribute("src",result.icon);
      ico.setAttribute("id","imgProfil");
      ico.setAttribute("class","img-thumbnail");
      var level = document.createElement('p');
      level.textContent = result.level;
      div.appendChild(ico);
      div.appendChild(nom);
  })
}

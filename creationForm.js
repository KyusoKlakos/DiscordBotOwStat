$(document).ready(function() {
    //cacher les stat div
    $("#profilsBase").hide();
    $("#conteneur").hide();
    //Création du "menu"
    let groupeBtn = $("<div>").attr({
        id:"nav",
        class:"btn-group w-100"
    }).appendTo("body");
    $("<button>").attr({
        id: "rechercheJoueur",
        class: "btn btn-default w-50 h-100"
    }).text("Rechercher un joueur").appendTo(groupeBtn);
    $("<button>").attr({
        id: "rechercheHero",
        class: "btn btn-default w-50 h-100"
    }).text("Rechercher un Hero").appendTo(groupeBtn);

    //Création des deux formulaires
    //Formulaire "Recherche Joueur"
    let divJoueur = $("<div>").attr({
        id:"rechercheJoueurDiv",
        class:"img-thumbnail mt-1 center joueurDiv"
    }).appendTo("body");
    $("<h4>").text("Entrer les informations du joueur recherché").appendTo(divJoueur);
    let nomJoueur = $("<div>").attr({
        class:"form-group center"
    }).appendTo(divJoueur);
    $("<label>").attr({
        class:"center"
    }).text("Battletag : ").appendTo(nomJoueur);
    $("<input>").attr({
        type:"text",
        placeholder:"Joueur-XXXX",
        name:"joueur",
        id:"joueurCherch",
        class:"form-control center",
        required:"true"
    }).appendTo(nomJoueur);

    let Serveur = $("<div>").attr({
        class:"form-group center"
    }).appendTo(divJoueur);
    $("<label>").attr({
        class:"center"
    }).text("Serveur : ").appendTo(Serveur);
    let selectRegion = $("<select>").attr({
        name:"region",
        id:"regionCherch",
        class:"form-control center"
    }).appendTo(Serveur);

    $("<option>").text("EU").appendTo(selectRegion);
    $("<option>").text("AS").appendTo(selectRegion);
    $("<option>").text("NA").appendTo(selectRegion);
    $("<button>").attr({
        id:"submitJoueur",
        class:"btn btn-default h-100"
    }).text("Rechercher").appendTo(divJoueur);
    divJoueur.show();

    //Formulaire "Recherche Hero"
    let divHeroCherche = $("<div>").attr({
        id:"rechercheHeroDiv",
        class:"img-thumbnail mt-1 center heroDiv"
    }).appendTo("body");
    $("<h4>").text("Entrer les informations du joueur recherché").appendTo(divHeroCherche);
    let nomJoueur2 = $("<div>").attr({
        class:"form-group center",
    }).appendTo(divHeroCherche);
    $("<label>").attr({
        class:"center"
    }).text("Battletag : ").appendTo(nomJoueur2);
    $("<input>").attr({
        type:"text",
        placeholder:"Joueur-XXXX",
        name:"joueur",
        class:"form-control center",
        required:"true",
        id:"nomJoueurHero"
    }).appendTo(nomJoueur2);

    let Hero = $("<div>").attr({
        class:"form-group center"
    }).appendTo(divHeroCherche);
    $("<label>").attr({
        class:"center"
    }).text("Hero : ").appendTo(Hero);
    let selectHero = $("<select>").attr({
        name:"hero",
        class:"form-control center",
        id:"heroCherch"
    }).appendTo(Hero);

    $("<option>").text("ana").appendTo(selectHero);
    $("<option>").text("roadhog").appendTo(selectHero);
    $("<option>").text("genji").appendTo(selectHero);

    $("<button>").attr({
        id:"submitHero",
        class:"btn btn-default h-100"
    }).text("Rechercher").appendTo(divHeroCherche);
    divHeroCherche.hide();
    $("#conteneurHeroCherch").hide();
  });
//Affiche les formulaires en fonction du bouton appuyer
$(document).ready(function() {
    $( "#rechercheJoueur" ).click(function() {
        $("#rechercheHeroDiv").hide();
        $("#rechercheJoueurDiv").show();
    });
    $( "#rechercheHero" ).click(function() {
      $("#rechercheJoueurDiv").hide();
      $("#rechercheHeroDiv").delay(300).show();
    });
  });
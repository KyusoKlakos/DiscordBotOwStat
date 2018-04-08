 $( document ).ready(function() {
    function recupDataHero(joueur,hero){
        let url = "https://ow-api.com/v1/stats/pc/eu/"+ joueur +"/heroes/"+hero;
        console.log(url);
        ajaxGet(url,function (reponse){
            //Le json retourner par l'api
            let result = $.parseJSON(reponse);
          });
      }
    
    
    $( "#submitHero" ).click(function() {
        if($("#nomJoueurHero").val().length === 0){
            alert("Vous n'avez pas mis de battletag !");
          }
          else if($("#nomJoueurHero").val().indexOf("-")===-1){
            alert("Un battletag 'Kyuso-21706'");
          }
          else{
            $(".heroDiv").hide();
            $("#nav").hide();
            recupDataHero($("#nomJoueurHero").val(),$("#heroCherch").val());
            $("#profilsBase").show();
            $("#conteneurHeroCherch").show();
          }
     });
});
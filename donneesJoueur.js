  let tabHero = ["ana","bastion","brigitte","dva","doomfist","genji","hanzo","junkrat","lucio","mccree","mei","mercy","moira","orisa","pharah","reaper","reinhardt","roadhog","soldier76","sombra","symmetra","torbjorn","tracer","widowmaker","winston","zarya","zenyatta"];

  $(document).ready(function() {

  //Action lors de l'appui du bouton
  function carteStatistiqueBase(nomHero, stats){
    let divCible = $('#statsHero'+ nomHero.substr(0,1).toUpperCase() +	nomHero.substr(1,heroName.length).toLowerCase());
    let divFlex1 = $("<div>").attr({
      id:"flex1",
      class:"center border border-warning px-2 py-2"
    });
    if(nomHero === "dva"){
      nomHero = "dVa";
    }
    divCible.empty();
    divCible.animate({
      height: 'toggle'
    });
    if(stats[nomHero].timePlayed.indexOf("hours") !== -1){
      let stringSplit = stats[nomHero].timePlayed.split(" ");
      $('<h1>').attr({
        class:"statsDetail center"
      }).css("color","black").text("Temps de jeu : " + stringSplit[0] + " heures").appendTo(divCible);
    }
    else{
      $('<h1>').attr({
        class:"statsDetail center"
      }).css("color","black").text("Temps de jeu : " + stats[nomHero].timePlayed).appendTo(divCible);
    }
    
    $('<span>').attr({
      id:"span1"
    }).text("Élimination par vie : " + stats[nomHero].eliminationsPerLife).appendTo(divFlex1);
    $('<span>').attr({
      id:"span2"
    }).text("Précision : " + stats[nomHero].weaponAccuracy + "%").appendTo(divFlex1);
    $('<span>').attr({
      id:"span2"
    }).text("Meilleur nombre d'élimination d'un seul coup : " + stats[nomHero].multiKillBest).appendTo(divFlex1);
    divFlex1.appendTo(divCible);
  }

  function recupDataJoueur(joueur,plateforme,region){
    let url = "https://ow-api.com/v1/stats/"+plateforme+"/"+ region +"/"+ joueur +"/complete";
    console.log(url);
    ajaxGet(url,function (reponse){
        //Le json retourner par l'api
        let result = $.parseJSON(reponse);
        //Statistique des partie rapide
        let statQP = result.quickPlayStats.topHeroes;
        let divRanking = $("<div>").attr({
          id:"divRank",
        });
        let divInfoBase = $("<div>").attr({
          id:"divInfoBase",
          class:"w-50 float-left"
        });
        let divGameWinJoueur = $("<div>").attr({
          id:"divGameWin" 
        });
        $('#profilsBase').append(divInfoBase);
        $('#profilsBase').append(divRanking);
        $('#profilsBase').append(divGameWinJoueur);
        //Le joueur en général
        let nomJoueur = $("<h1>").text(result.name)
        let ico = $('<img>').attr({
          src: result.icon,
          id: "imgProfil",
          class: "img-thumbnail"
        });
        let icoRank = $('<img>').attr({
          src: result.ratingIcon,
          id:"iconRate"
        });
        let rank = $('<span>').text("Classement : " + result.rating).attr({
          class:"center",
          id:"rankNombre"
        });
        let prestige = result.prestige;
        let level = $('<span>').text("Niveau : " + Number(prestige*100+result.level)).attr({
          class:"border border-secondary"
        });
        if(Number(level.text()) >= 1200){
          level.css("background-color","#ffd700");
        }
        else if(Number(level.text()) >= 600){
          level.css("background-color","#CECECE");
        }
        else{
          level.css("background-color","#cc6633");
        }
        let partieGagne = $("<span>").text("Partie gagnées : " + result.gamesWon); 
        divInfoBase.append(ico);
        divInfoBase.append(nomJoueur);
        divInfoBase.append(level);
        divRanking.append(icoRank);
        divRanking.append(rank);
        divGameWinJoueur.append(partieGagne);

        //Les nom des Heros et images
        let index=1;
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
            class:"btn btn-dark",
            id: "afficheDetails" + heroName.substr(0,1).toUpperCase() +	heroName.substr(1,heroName.length).toLowerCase()
          }).text("Détails").appendTo(divCarteHeros);
          let aled = $("<div>").attr({
            id:"statsHero"+ heroName.substr(0,1).toUpperCase() +	heroName.substr(1,heroName.length).toLowerCase(),
            class:"statsDev img-rounded"
          }).css('height','170px').css('display','none');
          divStat.after(aled);
          index++;
        }

        //Action sur les boutons pour les statistiques général des heros
        for(let i=0; i<tabHero.length;i++){
          $("#afficheDetails"+tabHero[i].substr(0,1).toUpperCase()+tabHero[i].substr(1,tabHero[i].length).toLowerCase()).click(function(){
            carteStatistiqueBase(tabHero[i],statQP);
            console.log(tabHero[i]);
          });
        }
      });
  }

    $( "#submitJoueur" ).click(function() {
      if($("#joueurCherch").val().length === 0){
        alert("Vous n'avez pas mis de battletag !");
      }
      else if($("#joueurCherch").val().indexOf("-")===-1){
        alert("Un battletag 'Kyuso-21706'");
      }
      else{
        $("#rechercheJoueurDiv").hide();
        $("#nav").hide();
        recupDataJoueur($("#joueurCherch").val(),"PC",$("#regionCherch").val());
        $("#profilsBase").show();
        $("#conteneur").show();
      }
    });
  });
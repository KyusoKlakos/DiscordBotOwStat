<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="perso.css">
    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script type="text/javascript" src="Styles.js"></script>
    <title>Accueil</title>
  </head>
  <body>
    <div id="recherche" class="img-thumbnail">
      <h1>Rechercher un joueur</h1>
        <form method="get" action="statGeneral.php">
          <div class="form-group">
            <label style="text-align:center;">BattleTag du joueur : </label>
            <input type="text" placeholder="Joueur-XXXXX" name="joueur" class="form-control" required style="box-shadow: 0.5px 0.5px 0.5px white;"><br/>
          </div>
          <div class="form-group">
            <label style="text-align:center;">Serveur de jeu du joueur : </label>
            <select name="region" class="form-control">
              <option value="" disabled selected>Région</option>
              <option>EU</option>
              <option>US</option>
              <option>AS</option>
            </select><br/>
        </div>
          <input type="submit" value="Rechercher" id="submit" class=""><br/>
        </form>
    </div>
    <footer id="mainFooter">
      <p>Fait par <a href="https://twitter.com/JeanKyuso">@Kyuso_yaah</a>, avec <a href="https://ow-api.com/">ow-api</a></p>
    </footer>
  </body>
</html>

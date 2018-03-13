<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Le joueur <?php echo $_GET['joueur'] ?></title>
    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="touteStatJSON.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="perso.css">
    <script>
      recupDataJoueur("<?php echo $_GET['joueur'] ?>","<?php echo $_GET['plateforme'] ?>","<?php echo $_GET['region'] ?>");
    </script>
  </head>
  <body>
    <div id="profilsBase"></div>
    <div id="stats"></div>
  </body>
</html>

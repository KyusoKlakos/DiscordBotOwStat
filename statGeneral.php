<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Le joueur <?php echo $_GET['joueur'] ?></title>
    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="touteStatJSON.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="perso.css">
    <link rel="stylesheet" href="stat.css">
    <script>
      recupDataJoueur("<?php echo $_GET['joueur'] ?>","PC","<?php echo $_GET['region'] ?>");
    </script>
  </head>
  <body>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><?php echo $_GET['joueur'] ?></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#home">RECHERCHER UN JOUEUR</a></li>
            <li><a href="#home">RECHERCHER UN HEROS</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="profilsBase"></div>
    <div id="conteneur">
      <div class="stats" id="hero1"></div>
      <div class="stats" id="hero2"></div>
      <div class="stats" id="hero3"></div>
      <div class="stats" id="hero4"></div>
      <div class="stats" id="hero5"></div>
      <div class="stats" id="hero6"></div>
      <div class="stats" id="hero7"></div>
      <div class="stats" id="hero8"></div>
      <div class="stats" id="hero9"></div>
      <div class="stats" id="hero10"></div>
      <div class="stats" id="hero11"></div>
      <div class="stats" id="hero12"></div>
      <div class="stats" id="hero13"></div>
      <div class="stats" id="hero14"></div>
      <div class="stats" id="hero15"></div>
      <div class="stats" id="hero16"></div>
      <div class="stats" id="hero17"></div>
      <div class="stats" id="hero18"></div>
      <div class="stats" id="hero19"></div>
      <div class="stats" id="hero20"></div>
      <div class="stats" id="hero21"></div>
      <div class="stats" id="hero22"></div>
      <div class="stats" id="hero23"></div>
      <div class="stats" id="hero24"></div>
      <div class="stats" id="hero25"></div>
      <div class="stats" id="hero26"></div>
      <div class="stats" id="hero27"></div>
    </div>
    <footer id="mainFooter">
      <p>Fait par <a href="https://twitter.com/JeanKyuso">@Kyuso_yaah</a>, avec <a href="https://ow-api.com/">ow-api</a></p>
    </footer>
  </body>
</html>

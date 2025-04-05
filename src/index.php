<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Scribbler - a codding landing page template for codrops</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/railscasts.min.css">
  <link rel="stylesheet" href="/assets/css/scribbler-global.css">
  <link rel="stylesheet" href="/assets/css/scribbler-landing.css">
  <link rel="stylesheet" href="/assets/css/home.css">
  <link rel="author" href="humans.txt">
</head>
<body class="min-vh-100">
<nav>
  <div class="logo"></div>
  <ul class="menu">
    <div class="menu__item toggle"><span></span></div>
    <li class="menu__item"><a href="/src/pages/doc.php" class="link link--dark"><i class="fa fa-book"></i> Documentation</a></li>
    <button class="login-button" onclick="window.location.href='/src/pages/login.php'">
      <span class="login-icon">👤</span>
  </button>
  </ul>
</nav>
<div class="hero">
  <h1 class="hero__title">HOME</h1>
  <!--<p class="hero__description">Documentazione per il progetto: Wiki</p>-->
</div>
<div class="wrapper">
  <div class="installation">
    <div class="tab__container">
     
     <!--Aggiungere qua search-->    
     <div class="search-bar" id="search-bar">
      <!--<input type="text" placeholder="Search...">
      <button>Search</button>-->
      </div>      
        </div>
      </div>
      <div class="feature">
        <div class="feature__item">
          <h3 class="section__title">Argomento 1</h3>
          <p>Start writing your notes immediately in any terminal! No more time wasted on navigating and opening your text editor.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Argomento 2</h3>
          <p>Save your file in Dropbox then you can access to it from anywhere.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Argomento 3</h3>
          <p>Encrypt your notes optionally. No one can get to your secrets! </p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Argomento 4</h3>
          <p>Maintain all your settings in a single <span class="code code--inline">config.json</span> file. Never need to redo the setting every single time jotting down a note.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Argomento 5</h3>
          <p>For better readability, scribbler has a clean, beautiful color scheme allow you to scan files fast.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Argomento 6</h3>
          <p>You can expect common keybindings for scribbler. Customize <span class="code code--inline">bindings.json</span> for your own liking! </p>
        </div>
      </div>
      
      <div class="callout">
        <p>Read our documentation for advanced keybindings and customization</p>
        <a href="index.html" class="button--primary">Documentation</a>
      </div>
    </div>
    <footer class="footer fixed-bottom">© Copyright <?php echo date("Y"); ?> Angelo Ripamonti, Alexandros Kotis, Lorenzo Di Donna e Simone Tacconi</footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script src="/assets/js/scribbler.js"></script>
    <script type="module" src="index.js"></script>
  </body>
</html>
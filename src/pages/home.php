<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progetto Wiki - Home</title>
    <link rel="stylesheet" href="/assets/css/home.css">
</head>

<body>
    <div class="sidebar">
        Progetto Wiki
    </div>
    <div class="main-content">
        <h1>Home</h1>
        <button class="login-button" onclick="window.location.href='login.php'">
            <span class="login-icon">👤</span>
        </button>

        <div class="search-bar" id="search-bar">
            <!--<input type="text" placeholder="Search...">
            <button>Search</button>-->
        </div>
        <div class="arguments">
            <div class="argument">Argomento 1</div>
            <div class="argument">Argomento 2</div>
            <div class="argument">Argomento 3</div>
            <div class="argument">Argomento 4</div>
            <div class="argument">Argomento 5</div>
            <div class="argument">Argomento 6</div>
        </div>

    </div>
    <script src="home.js" type="module"></script>
</body>

</html>
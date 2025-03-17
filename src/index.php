<?php
    $config = json_decode(file_get_contents(__DIR__ . '/config.json'), true);

    $hostname = $config['hostname'];
    $username = $config['username'];
    $password = $config['password'];
    $dbname = $config['database_name'];
    $port = $config['port'];
    $conn = new mysqli($hostname, $username, $password, $dbname, $port);
    if ($conn->connect_error) {
        die("Connessione fallita: " . $conn->connect_error);
    }
?>
<!-- Scribbler Template -->
<!-- https://tympanus.net/codrops/2018/01/12/freebie-scribbler-website-template-html-sketch/ -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 </head>
 <body>
    ciao 
 </body>
 </html>
<?php $conn->close() ?>
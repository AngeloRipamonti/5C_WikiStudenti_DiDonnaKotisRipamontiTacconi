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
/*?>*/
<?php
include 'database.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $result = $conn->query(""); //SELECT WHERE
            $data = $result->fetch_assoc();
            echo json_encode($data);
        } else {
            $result = $conn->query(""); //SELECT ALL
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            echo json_encode($data);
        }
        break;

    case 'POST':
        // INPUT FORM POST
        $conn->query(""); //INSERT INTO
        echo json_encode(["message" => "added successfully"]);
        break;

    case 'PUT':
        //TAKE FORM INPUT SET E WHERE
        $conn->query(""); //UPDATE 
        if($conn->affected_rows==0)
                echo json_encode(["message" => "doesn't exist"]);
            else
                echo json_encode(["message" => "updated successfully"]);
        
        break;

    case 'DELETE':
        $id = $input['id'];
        
        if(($conn->query(""))===TRUE) //DELETE
            if($conn->affected_rows==0)
                echo json_encode(["message" => "doesn't exist"]);
            else
                echo json_encode(["message" => "deleted successfully"]);
        else
            echo json_encode(["message" => "error"]);
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>

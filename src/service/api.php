<?php
    include 'database.php';

    header("Content-Type: application/json");

    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    // input contiene il body

    switch ($method) {
        case 'GET':
            switch ($input["table"]) {
                case "users":
                    if($input["username"] && $input["password"]){
                        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
                        $stmt->bind_param("ss", $input["email"], $input["password"]);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows === 1){
                            $row = $result->fetch_assoc();
                            echo json_encode($row);
                        } else {
                            echo json_encode(["error" => "Invalid credentials"]);
                        }
                    }
                    break;
                case "content":
                    break;
                default:
                    echo json_encode(["message" => "Invalid request method"]);
                    break;
            }
            break;

        case 'POST':
            switch ($input["table"]) {
                case "users":
                    $stmt = $conn->prepare("INSERT INTO users (email, password, name, class, birth_date) VALUES (?, ?, ?, ?, ?)");
                    $stmt->bind_param("sssss", $input["email"], $input["password"], $input["name"], $input["class"], $input["birth_date"]);
                    $stmt->execute();
                    echo json_encode(["message" => "added successfully"]);
                    break;
                case "content":
                    break;
                default:
                    echo json_encode(["message" => "Invalid request method"]);
                    break;
            }
            break;

        case 'PUT':
            switch ($input["table"]) {
                case "users":

                    break;
                case "content":
                    break;
                default:
                    echo json_encode(["message" => "Invalid request method"]);
                    break;
            }
            //TAKE FORM INPUT SET E WHERE
            $conn->query(""); //UPDATE
            if($conn->affected_rows==0)
                    echo json_encode(["message" => "doesn't exist"]);
                else
                    echo json_encode(["message" => "updated successfully"]);

            break;

        case 'DELETE':
            switch ($input["table"]) {
                case "users":

                    break;
                case "content":
                    break;
                default:
                    echo json_encode(["message" => "Invalid request method"]);
                    break;
            }
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

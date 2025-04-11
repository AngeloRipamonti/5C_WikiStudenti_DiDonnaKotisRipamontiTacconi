<?php
    include 'database.php';
    if (!isset($conn)) {
        die("Connessione non inizializzata");
    }
    header("Content-Type: application/json");

    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);

    switch ($method) {
        case 'GET':
            switch ($input["table"]) {
                case "users":
                    if (!empty($input["email"]) && !empty($input["password"])) {
                        $stmt = $conn->prepare("SELECT DISTINCT * FROM users AS u JOIN roles_users AS ru ON u.email = ru.email WHERE email = ? AND password = ?");
                        $stmt->bind_param("ss", $input["email"], $input["password"]);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if ($result->num_rows === 1) {
                            $row = $result->fetch_assoc();
                            echo json_encode($row);
                        } else {
                            echo json_encode(["error" => "Invalid credentials"]);
                        }
                    } else {
                        echo json_encode(["error" => "Missing parameters"]);
                    }
                    break;

                case "content":
                    if (!empty($input["version"]) && !empty($input["id"])) {
                        $stmt = $conn->prepare("SELECT DISTINCT * FROM contents c JOIN versions v ON c.id = v.content_id WHERE c.id = ? AND v.version = ?");
                        $stmt->bind_param("ii", $input["id"], $input["version"]);
                        $stmt->execute();
                        $result = $stmt->get_result();
                    } else {
                        $result = $conn->query("SELECT DISTINCT * FROM contents c JOIN versions AS v ON c.id = v.content_id JOIN versions_images AS vi ON v.version = vi.version AND c.id = vi.id JOIN images AS i ON i.path = vi.path");
                    }

                    $data = [];
                    while ($row = $result->fetch_assoc()) {
                        $data[] = $row;
                    }
                    echo json_encode($data);
                    break;

                default:
                    echo json_encode(["message" => "Invalid table"]);
                    break;
            }
            break;

        case 'POST':
            switch ($input["table"]) {
                case "users":
                    $stmt = $conn->prepare("INSERT INTO users (email, password, name, class, birth_date) VALUES (?, ?, ?, ?, ?)");
                    $stmt->bind_param("sssss", $input["email"], $input["password"], $input["name"], $input["class"], $input["birth_date"]);
                    $stmt->execute();
                    echo json_encode(["message" => "User added successfully"]);
                    break;

                case "content":
                    echo json_encode(["message" => "Content POST not implemented"]);
                    break;

                default:
                    echo json_encode(["message" => "Invalid table"]);
                    break;
            }
            break;

        case 'PUT':
            switch ($input["table"]) {
                case "users":
                    $stmt = $conn->prepare("UPDATE users SET email=?, password=?, name=?, class=?, birth_date=? WHERE id=?");
                    $stmt->bind_param("sssssi", $input["email"], $input["password"], $input["name"], $input["class"], $input["birth_date"], $input["id"]);
                    $stmt->execute();
                    echo json_encode(["message" => $stmt->affected_rows > 0 ? "User updated successfully" : "User doesn't exist"]);
                    break;

                case "content":
                    echo json_encode(["message" => "Content PUT not implemented"]);
                    break;

                default:
                    echo json_encode(["message" => "Invalid table"]);
                    break;
            }
            break;

        case 'DELETE':
            switch ($input["table"]) {
                case "users":
                    $stmt = $conn->prepare("DELETE FROM users WHERE email = ?");
                    $stmt->bind_param("s", $input["email"]);
                    $stmt->execute();
                    echo json_encode(["message" => $stmt->affected_rows > 0 ? "User deleted successfully" : "User doesn't exist"]);
                    break;

                case "content":
                    echo json_encode(["message" => "Content DELETE not implemented"]);
                    break;

                default:
                    echo json_encode(["message" => "Invalid table"]);
                    break;
            }
            break;

        default:
            echo json_encode(["message" => "Invalid request method"]);
            break;
    }

    $conn->close();
/*?>*/
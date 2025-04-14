<?php
    include 'database.php';
    require_once 'MailerService.php';

    $mailer = new MailerService('example@example.com', 'WikiProject');

    header("Content-Type: application/json");

    if (!isset($conn)) die("Connessione non inizializzata");


    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);

    function respond($data) {
        echo json_encode($data);
        exit;
    }

    switch ($method) {
        case 'GET':
            switch ($input["table"]) {
                case "users":
                    if (!empty($input["email"]) && !empty($input["password"])) {
                        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
                        $stmt->bind_param("s", $input["email"]);
                        $stmt->execute();
                        $result = $stmt->get_result();

                        if ($result->num_rows === 1) {
                            $user = $result->fetch_assoc();
                            if (password_verify($input["password"], $user["password"])) {
                                respond($user);
                            } else {
                                respond(["error" => "Invalid credentials"]);
                            }
                        } else {
                            respond(["error" => "Invalid credentials"]);
                        }
                    } else {
                        respond(["error" => "Missing parameters"]);
                    }
                    break;

                case "content":
                    if (!empty($input["version"]) && !empty($input["id"])) {
                        $stmt = $conn->prepare("SELECT DISTINCT * FROM contents c JOIN versions v ON c.id = v.content_id WHERE c.id = ? AND v.version = ?");
                        $stmt->bind_param("ii", $input["id"], $input["version"]);
                        $stmt->execute();
                        $result = $stmt->get_result();
                    } else {
                        $result = $conn->query("SELECT DISTINCT * FROM contents c JOIN versions v ON c.id = v.content_id JOIN versions_images vi ON v.version = vi.version AND c.id = vi.id JOIN images i ON i.path = vi.path");
                    }

                    $data = [];
                    while ($row = $result->fetch_assoc()) {
                        $data[] = $row;
                    }
                    respond($data);
                    break;

                default:
                    respond(["message" => "Invalid table"]);
            }
            break;

        case 'POST':
            switch ($input["table"]) {
                case "users":
                    if (!filter_var($input["email"], FILTER_VALIDATE_EMAIL)) {
                        respond(["error" => "Invalid email format"]);
                    }

                    $hashedPassword = password_hash($input["password"], PASSWORD_DEFAULT);
                    $stmt = $conn->prepare("INSERT INTO users (email, password, name, class, birth_date) VALUES (?, ?, ?, ?, ?)");
                    $stmt->bind_param("sssss", $input["email"], $hashedPassword, $input["name"], $input["class"], $input["birth_date"]);
                    $stmt->execute();

                    respond(["message" => "User added successfully"]);
                    break;

                case "content":
                    respond(["message" => "Content POST not implemented"]);
                    break;

                default:
                    respond(["message" => "Invalid table"]);
            }

            if (!empty($input["mailSender"])) {
                $to = $input["email"];
                $subject = $input["subject"];
                $body = $input["body"];

                if ($mailer->sendMail($to, $subject, $body)) {
                    respond(["mail" => "Email inviata!"]);
                } else {
                    respond(["mail" => "Errore nell'invio della mail."]);
                }
            }
            break;

        case 'PUT':
            switch ($input["table"]) {
                case "users":
                    $hashedPassword = password_hash($input["password"], PASSWORD_DEFAULT);
                    $stmt = $conn->prepare("UPDATE users SET email=?, password=?, name=?, class=?, birth_date=? WHERE id=?");
                    $stmt->bind_param("sssssi", $input["email"], $hashedPassword, $input["name"], $input["class"], $input["birth_date"], $input["id"]);
                    $stmt->execute();
                    respond(["message" => $stmt->affected_rows > 0 ? "User updated successfully" : "User doesn't exist"]);
                    break;

                case "content":
                    if (!empty($input["approved"]) && !empty($input["approver"]) && !empty($input["version"])) {
                        $msg = "";

                        if (!empty($input["content"])) {
                            $stmt = $conn->prepare("UPDATE contents SET status = ?, approver_email = ? WHERE id = ?");
                            $stmt->bind_param("isi", $input["approved"], $input["approver"], $input["content"]);
                            $stmt->execute();
                            $msg .= $stmt->affected_rows > 0 ? "Content updated. " : "Content doesn't exist. ";
                        }

                        $stmt = $conn->prepare("UPDATE versions SET status = ?, approver_email = ? WHERE version = ?");
                        $stmt->bind_param("isi", $input["approved"], $input["approver"], $input["version"]);
                        $stmt->execute();
                        $msg .= $stmt->affected_rows > 0 ? "Version updated successfully." : "Version doesn't exist.";

                        respond(["message" => $msg]);
                    } else {
                        respond(["message" => "Missing required fields: 'approved', 'approver', and/or 'version'."]);
                    }
                    break;

                default:
                    respond(["message" => "Invalid table"]);
            }
            break;

        case 'DELETE':
            switch ($input["table"]) {
                case "users":
                    $stmt = $conn->prepare("DELETE FROM users WHERE email = ?");
                    $stmt->bind_param("s", $input["email"]);
                    $stmt->execute();
                    respond(["message" => $stmt->affected_rows > 0 ? "User deleted successfully" : "User doesn't exist"]);
                    break;

                case "content":
                    respond(["message" => "Content DELETE not implemented"]);
                    break;

                default:
                    respond(["message" => "Invalid table"]);
            }
            break;

        default:
            respond(["message" => "Invalid request method"]);
    }

    $conn->close();
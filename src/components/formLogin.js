export const generateLoginComponent = (parentElement, pubSub) => {
    let token;
    let isLogged;
    let privateClass;

    const login = (username, password) => {
        /* return new Promise((resolve, reject) => {
             fetch("https://ws.cipiaceinfo.it/credential/login", {
                 method: "POST",
                 headers: {
                     "content-type": "application/json",
                     "key": token
                 },
                 body: JSON.stringify({
                     username: username,
                     password: password
                 })
             })
             .then(r => r.json())
             .then(data => resolve(data.result))
             .catch(err => reject(err.result));
         });*/
        return true;
    };

    return {
        build: function () {//inputToken, inputPrivateClass) => {
            isLogged = true;
            /* token = inputToken;
             isLogged = sessionStorage.getItem("logged") || false;
             privateClass = inputPrivateClass;
 
             if (isLogged) {
                 document.getElementById("loginContainer").classList.remove("visible");
                 document.getElementById("loginContainer").classList.add("hidden");
                 document.querySelectorAll("." + privateClass).forEach(e => {
                     e.classList.remove("hidden");
                     e.classList.add("visible");
                 });
             }*/
        },

        renderFormLogin: function ()  {

            let html = `
            <div>
                <input type="text" id="usernameInput" placeholder="Email">
            </div>
            <div>
                <input type="password" id="passwordInput" placeholder="Password">
            </div>
            <p>Non hai un account? <a type="button" id="registerA" href='#'>Registrati</a></p>
            <div id="result"></div>
            <div class="modal-footer">
                <button type="button" id="closeModalClient" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" id="loginButton" class="btn btn-primary">Login</button>
            </div>
        `;
        parentElement.innerHTML = html;
        document.querySelector("#ModalLabel").innerHTML = "Login";

        document.querySelector("#registerA").onclick = () => {
            this.renderFormRegister();
        };
        pubSub.subscribe("loginVerified", (data) => {
            document.querySelector("#closeModalClient").click();
        })


console.log(parentElement)
            document.querySelector("#registerA").onclick = () => {
               console.log(this)
                this.renderFormRegister()
                document.querySelector("#ModalLabel").innerHTML = "Registrati";

            }
            document.getElementById("loginButton").onclick = () => {
            let usernameInput = document.getElementById("usernameInput");
            let passwordInput = document.getElementById("passwordInput");
            pubSub.publish("loginComplete",{
                email:usernameInput.value,
                password:passwordInput.value
            });
            document.getElementById("closeModalClient").click();
        }
/*
            document.getElementById("loginButton").onclick = () => {
                const username = document.getElementById("usernameInput").value;
                const password = document.getElementById("passwordInput").value;

                if (username && password) {
                    login(username, password);
                    .then(r => {
                        if (r) {
                            isLogged = true;
                            sessionStorage.setItem("Logged", true);

                            document.getElementById("loginContainer").classList.remove("visible");
                            document.getElementById("loginContainer").classList.add("hidden");
                            document.querySelectorAll("." + privateClass).forEach(e => {
                                e.classList.remove("hidden");
                                e.classList.add("visible");
                            });
                        } else {
                            alert("Credenziali errate");
                        }
                    })
                    .catch(err => {
                        console.log(err) ;
                    });
                }
                    
            };
            */
        },
        isLogged: () => {
            return isLogged;
        },
        renderFormRegister: function()  {
            let html = `
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required>
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password" required>
                </div>
                <div class="input-container"> 
                    <label for="name">Nome</label>
                    <input type="text" id="name" placeholder="Nome" required> 
                </div>
                <div class="input-container">
                    <label for="class">Classe</label>
                    <select id="class" placeholder="Classe" required>
                        <option value="1">1</option>
                        
                        <option value="2">2</option>
                        
                        <option value="3">3</option>
                    
                        <option value="4">4</option>
                        
                        <option value="5">5</option>
                        
                    </select>
                </div>
                <div class="input-container">
                    <label for="date">Data di nascita</label>
                    <input type="date" id="dateOfBirth" placeholder="Data di nascita" required>
                </div>
                <div class="input-container">
                    <label>Register as:</label>
                    <div class="role-selection">
                        <input type="radio" id="approver" name="role" value="approver">
                        <label class="role-btn black" for="approver">approver</label>
                        <input type="radio" id="editor" name="role" value="editor">
                        <label class="role-btn gray" for="editor">editor</label>
                    </div>
                    <p>hai già un account? <a  id="AccediA" href='#'>Accedi</a></p>
                </div>
                <div id="result"></div>
<div class="modal-footer">
            <button type="button" id="closeModalClient" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" id="registerButton" class="btn btn-primary">Register</button>
          </div>`;
            parentElement.innerHTML = html;
            document.querySelector("#ModalLabel").innerHTML = "Registrati";

            document.querySelector("#AccediA").onclick = () => {
                this.renderFormLogin();
            };
            document.querySelector("#closeModalClient").onclick = () => {
                let loginBody = document.querySelector("#loginBody");
                loginBody.classList.remove("d-none");
                let registerBody = document.querySelector("#registerBody");
                registerBody.classList.add("d-none");
                document.querySelector("#ModalLabel").innerHTML = "Login";

            }
            document.getElementById("registerButton").onclick = () => {
                if(document.getElementById("email").value && document.getElementById("password").value && document.getElementById("name").value && document.getElementById("class").value && document.getElementById("dateOfBirth").value) {
                
                let data = {
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    name: document.getElementById("name").value,
                    class: document.getElementById("class").value,
                    dateOfBirth: document.getElementById("dateOfBirth").value,
                    role: document.getElementById("approver").checked ? "approver" : document.getElementById("editor").checked ? "editor" : "viewer"
                }
                pubSub.publish("register", data);
            }else{
                alert("Compila tutti i campi");
            }
            }
            pubSub.subscribe("registerComplete", (data) => {
                document.getElementById("result").innerText = data;
            })
        }
    };
};
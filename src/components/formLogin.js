export const generateLoginComponent = (parentElement) => {
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
        build: () => {//inputToken, inputPrivateClass) => {
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

        renderFormLogin: () => {

            let html = `
           <div>
      <input type="text" id="usernameInput" placeholder="Username">
            </div>
            <div>
                <input type="password" id="passwordInput" placeholder="Password">
            </div>
            <p>Non hai un account? <a  id="registerA" href='#'>Registrati</a></p>
      </div>
        `;

           parentElement.innerHTML = html;
           document.querySelector("#ModalLabel").innerHTML = "Login";

           document.querySelector("#closeModalClient").onclick = () => {
            let loginBody = document.querySelector("#loginBody");
            loginBody.classList.add("d-none");
            let registerBody = document.querySelector("#registerBody");
            registerBody.classList.remove("d-none");
            document.querySelector("#ModalLabel").innerHTML = "Register";

        }



            document.querySelector("#registerA").onclick = () => {
                let loginBody = document.querySelector("#loginBody");
                loginBody.classList.add("d-none");
                let registerBody = document.querySelector("#registerBody");
                registerBody.classList.remove("d-none");
                document.querySelector("#ModalLabel").innerHTML = "Registrati";

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
        renderFormRegister: () => {
            let html = `
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email">
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password">
                </div>
                <div class="input-container">
                    <label for="name">Nome</label>
                    <input type="text" id="name" placeholder="Nome">
                </div>
                <div class="input-container">
                    <label for="class">Classe</label>
                    <input type="text" id="class" placeholder="Classe">
                </div>
                <div class="input-container">
                    <label for="date">Data di nascita</label>
                    <input type="date" id="dateOfBirth" placeholder="Data di nascita">
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
                <div id="result"></div>`;
            parentElement.innerHTML = html;
            document.querySelector("#ModalLabel").innerHTML = "Registrati";
            document.querySelector("#AccediA").onclick = () => {
                let loginBody = document.querySelector("#loginBody");
                loginBody.classList.remove("d-none");
                let registerBody = document.querySelector("#registerBody");
                registerBody.classList.add("d-none");
                document.querySelector("#ModalLabel").innerHTML = "Login";

            }
            document.querySelector("#closeModalClient").onclick = () => {
                let loginBody = document.querySelector("#loginBody");
                loginBody.classList.remove("d-none");
                let registerBody = document.querySelector("#registerBody");
                registerBody.classList.add("d-none");
                document.querySelector("#ModalLabel").innerHTML = "Login";

            }


        }
    };
};
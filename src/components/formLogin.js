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
            <h2>Accedi</h2>
            <div>
                <input type="text" id="usernameInput" placeholder="Username">
            </div>
            <div>
                <input type="password" id="passwordInput" placeholder="Password">
            </div>
            <button type="button" id="loginButton">Login</button>
            <p>Non hai un account? <a href='register.html'>Registrati</a></p>
            
            <!-- Pulsante per tornare alla Home -->
            <button class="home-button" onclick="window.location.href='home.php'">
                🔙 Torna alla Home
            </button>
        `;

            document.getElementById("login").innerHTML = html;
            document.getElementById("loginButton").onclick = () => {
                const username = document.getElementById("usernameInput").value;
                const password = document.getElementById("passwordInput").value;

                if (username && password) {
                    login(username, password);
                    /*.then(r => {
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
                    });*/
                }
            };
        },
        isLogged: () => {
            return isLogged;
        },
        renderFormRegister: () => {
            let html = `
                <h2>Register</h2>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email">
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password">
                </div>
                <div class="input-container">
                    <label>Register as:</label>
                    <div class="role-selection">
                        <input type="radio" id="approver" name="role" value="approver">
                        <label class="role-btn black" for="approver">approver</label>
                        <input type="radio" id="editor" name="role" value="editor">
                        <label class="role-btn gray" for="editor">editor</label>
                    </div>
                </div>
                <div id="result"></div>`;
            parentElement.innerHTML = html;

            document.querySelector("#registerBtn").onclick = () => {
                let username = document.querySelector("#username").value;
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#password").value;

            }
        }
    };
};
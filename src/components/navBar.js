export function navBarComponent(parentElement) {
    let callback;
    let loginCallback;
    let registerCallback;
    let title;
    let buttons;

    return {
        render: (isLogged) => {
           /////// if (!title || !buttons) return false;

            let newNavBar = `<nav>
                          <div class="logo"></div>
                          <ul class="menu">
                            <div class="menu__item toggle"><span></span></div>
                            <li class="menu__item"><a href="/src/pages/doc.php" class="link link--dark"><i class="fa fa-book"></i> Documentation</a></li>
                            <li class="menu__item"><a href="/src/pages/login.php" class="link link--dark"><i class="fa fa-user"></i></a></li>
                          </ul>
                        </nav>
                        <div class="nav-bar" id="nav-bar">
  <h1 class="hero__title">Home</h1>
  <!--<p class="hero__description">Documentazione per il progetto: Wiki</p>-->
</div>
                           `;

            parentElement.innerHTML = newNavBar;

          //  document.querySelector("#open").onclick = () => callback();
            //document.querySelector("#login").onclick = () => loginCallback();
         //   document.querySelector("#register").onclick = () => registerCallback();
        },
        callback(value) {
            callback = value;
        },
        loginButton(value) {
            loginCallback = value;
        },
        registerCallback(value) {
            registerCallback = value;
        }
    }
}

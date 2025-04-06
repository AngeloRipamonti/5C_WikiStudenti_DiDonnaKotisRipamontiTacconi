export function navBarComponent(parentElement) {
    let callback;
    let loginCallback;
    let registerCallback;
    let title;
    let buttons;

    return {
        build: (tit, btn) => {
            title = tit;
            buttons = btn;
        },
        render: (isLogged) => {
            if (!title || !buttons) return false;

            let newNavBar = `
                <div class="container" style="margin: 0 auto; padding: 0 16px;">
                    <div class="nav" style="display: flex; justify-content: space-between; align-items: center; height: 60px; background-color: #f0f0f0;">
                        <div class="nav-left" style="display: flex; align-items: center;">
                            <h1 class="nav-title" style="font-size: 24px; font-weight: bold; color: #333;">${title}</h1>
                        </div>
                        <div class="nav-right" style="display: flex; gap: 10px; align-items: center;">
                            <button class="${isLogged === "true" ? "show" : "hidden"} nav-btn" id="open"
                                style="border: none; background-color: #333; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer;">
                                ${buttons}
                            </button>
                            <button class="${isLogged === "true" ? "hidden" : "show"} nav-btn credential" id="login"
                                style="border: none; background-color: #333; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer;">
                                Login
                            </button>
                            <button class="${isLogged === "true" ? "hidden" : "show"} nav-btn credential" id="register"
                                style="border: none; background-color: #333; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer;">
                                Register
                            </button>
                        </div>
                    </div>
                </div>`;

            parentElement.innerHTML = newNavBar;

            document.querySelector("#open").onclick = () => callback();
            document.querySelector("#login").onclick = () => loginCallback();
            document.querySelector("#register").onclick = () => registerCallback();
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

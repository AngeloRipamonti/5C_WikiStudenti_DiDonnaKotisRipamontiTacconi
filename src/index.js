import { searchBarComponent } from "./components/searchBar.js";
import { navBarComponent} from "./components/navBar.js";
import { generateLoginComponent } from "./components/formLogin.js";
import { createNavigator } from "./components/navigator.js";
const navigator = createNavigator(document.querySelector("#pages"));
const navbar = navBarComponent(document.getElementById("nav-bar"));
const search = searchBarComponent(document.querySelector("#search-bar"));
console.log(document.querySelector("#search-bar"));
search.render();
navbar.render(true);
const register =  generateLoginComponent(document.querySelector("#registerBody"));
console.log(document.querySelector("#registerBody"));
register.renderFormRegister();
const login=generateLoginComponent(document.querySelector("#loginBody"));
login.renderFormLogin();
console.log(document.querySelector("body"));
/*document.querySelectorAll(".wiki-page").forEach((page) => {
    page.onclick = () => {
        location.href = "#"+page.id
    };
});*/
import { searchBarComponent } from "./components/searchBar.js";
import { navBarComponent} from "./components/navBar.js";

const navbar = navBarComponent(document.getElementById("nnnnnn"));
const search = searchBarComponent(document.querySelector("#search-bar"));
console.log(document.querySelector("#search-bar"));
search.render();
navbar.render(true);
console.log(document.querySelector("#nav-bar"));
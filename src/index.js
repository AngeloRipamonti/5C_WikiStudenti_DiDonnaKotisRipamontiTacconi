import { searchBarComponent } from "./components/searchBar.js";
const search = searchBarComponent(document.querySelector("#search-bar"));
console.log(document.querySelector("#search-bar"));
search.render();
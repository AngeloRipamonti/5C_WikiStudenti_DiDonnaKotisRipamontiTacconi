// Import
import {database} from "./components/database.js";
import { searchBarComponent } from "./components/searchBar.js";
import { navBarComponent} from "./components/navBar.js";
import { generateLoginComponent } from "./components/formLogin.js";
import { createNavigator } from "./components/navigator.js";
import {pubSub} from "./components/pubsub.js";
import { content } from "./components/content.js";
import {sideBarComponent} from"./components/sideBar.js";

// Variabili
const pubsub = pubSub();
const db = database(pubsub);
const navigator = createNavigator(document.querySelector("#pages"));
const navbar = navBarComponent(document.getElementById("nav-bar"));
const search = searchBarComponent(document.querySelector("#search-bar"),pubsub);
const credential =  generateLoginComponent(document.querySelector("#modalbody"), pubsub);
const homeContent = content(document.getElementById("pages"), pubsub);
const sidebarComponent  = sideBarComponent(document.getElementById("nav-bar"), pubsub);

// Build
homeContent.build([
    {id: 1, title: "Database", description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
    {id: 1, title: "Relazioni", description: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
    {id: 1, title: "Associazioni", description: "cccccccccccccccccccccccccccccccccccccccccccccccccc"},
    {id: 1, title: "Entità", description: "ddddddddddddddddddddddddddddddddddddddddd"},
    {id: 1, title: "SQL", description: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},
    {id: 1, title: "Algebra", description: "ffffffffffffffffffffffffffffffffffff"},
    {id: 1, title: "PHP", description: "dddddddddddddddddddddddddddddddddd"}
]); 

// Render
search.render();
navbar.render(true);
credential.renderFormLogin();
homeContent.homePage();



pubsub.publish("sidebar", await db.sidebar());

//console.log(db)
//console.log(document.querySelector("#search-bar"));
//console.log(document.querySelector("body"));
/*document.querySelectorAll(".wiki-page").forEach((page) => {
    page.onclick = () => {
        location.href = "#"+page.id
    };
});*/

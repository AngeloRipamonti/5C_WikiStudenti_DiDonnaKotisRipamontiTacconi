// Import
import {database} from "./components/database.js";
import { searchBarComponent } from "./components/searchBar.js";
import { navBarComponent} from "./components/navBar.js";
import { generateLoginComponent } from "./components/formLogin.js";
import { createNavigator } from "./components/navigator.js";
import {pubSub} from "./components/pubsub.js";
import { content } from "./components/content.js";
import {sideBarComponent} from"./components/sideBar.js";
import { user } from "./components/user.js"

// Variabili
const pubsub = pubSub();
const db = database();
const navigator = createNavigator(document.querySelector("#pages"));
const navbar = navBarComponent(document.getElementById("nav-bar"));
const search = searchBarComponent(document.querySelector("#search-bar"),pubsub);
const credential =  generateLoginComponent(document.querySelector("#modalbody"), pubsub);
const homeContent = content(document.getElementById("pages"), pubsub);
const accountSidebar  = sideBarComponent("sidebarAccount", pubsub);
let utente;

// Build
homeContent.build(await db.content6rand());

// Render
search.render();
navbar.render(true);
credential.renderFormLogin();
homeContent.homePage();

// PubSub
pubsub.publish("sidebar", await db.sidebar());
pubsub.subscribe("loginComplete", async (data)=>{
    let response = await db.login(data.email, data.password);
    utente = user(document.getElementById("userPage"), response, pubsub);
    utente.renderAccount();
    accountSidebar.render();
    location.href="#user";
})
pubsub.subscribe("register", async (data)=>{
    let r = await db.register(data.email, data.password, data.name, data.dateOfBirth, data.class, data.role);
    let response = await db.login(data.email, data.password);
    utente = user(document.getElementById("userPage"), response, pubsub);
    utente.renderAccount();
    accountSidebar.render();
    location.href="#user";
})
pubsub.subscribe("search", async (data)=>{
    let response = await db.searchbar(data);
    homeContent.filter(response);
})
pubsub.subscribe("searchFailed", ()=> homeContent.homePage());
pubsub.subscribe("modifyAccount", async (data) => {
   let response = await db.updateAccount(data.column, data.email, data.value);
   pubsub.publish("confirmModifyAccount");
});
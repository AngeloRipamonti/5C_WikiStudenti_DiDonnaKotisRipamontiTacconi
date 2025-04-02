import { generateLoginComponent } from "./components/formLogin.js";
const login = generateLoginComponent(document.querySelector("#login"));
login.build("token", "privateClass");
login.renderForm();

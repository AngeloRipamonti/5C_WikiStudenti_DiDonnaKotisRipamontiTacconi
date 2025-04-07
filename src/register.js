import { generateLoginComponent } from "./components/formLogin.js";
const register = generateLoginComponent(document.querySelector("#register"));
register.renderFormRegister();

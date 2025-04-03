import { pubSub } from "./pubsub.js";

export const searchBar = (htmlelement) => {
    return {
        render : ()=>{
            let html = ` <input type="text" id="search" placeholder="Search..."> <button type="button" id="searchBtn">Cerca</button>`;
            htmlelement.innerHTML = html;
            document.querySelector("#searchBtn").onclick = () => {
                let data = document.querySelector("#search").value;
                pubSub.publish("search", data); // Usa l'istanza importata
            }
        },
    }
}
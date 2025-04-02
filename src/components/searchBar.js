import { pubSub } from "../pubSub.js";
export const searchBar = (htmlelement) => {
    return {
        render : ()=>{
            let html = ` <input type="text" id="search" placeholder="Cerca..."> <button type="button" id="searchBtn">Cerca</button>`;
            htmlelement.innerHTML = html;
            document.querySelector("#searchBtn").onclick = () => {
                let data = document.querySelector("#search").value;
                pubSub.publish("search", data);
            }
        },
    }

}
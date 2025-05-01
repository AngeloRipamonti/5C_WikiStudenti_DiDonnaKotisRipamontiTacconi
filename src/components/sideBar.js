export function sideBarComponent(idParentElement, pubSub) {
    const parentElement = document.getElementById(idParentElement);
    let index = idParentElement == "sidebarAccount" ? 0 : 1;
    const variable = {
        0: `<aside class="doc__nav bg-light p-2 d-flex flex-column min-vh-100 col-1">
        <ul class="list-unstyled">
          <li class="js-btn selected">Editor</li>
          <li class="js-btn"><button id="sidebarApproverBtn">Approver</button></li>
        </ul>
      </aside>`,

        1: `<ul class="nav flex-column list-unstyled">
        <li class="nav-item"><a class="nav-link" href="#UML">UML/ER/Logic Model</a>
        </li>
    </ul>`

    };

    const render = () => {
        if (variable[index]) {
            parentElement.innerHTML = variable[index];
            if(index===0){
                document.getElementById("sidebarApproverBtn").onclick = () => pubSub.publish("sidebarApproverBtn");
            }
        } else {
            console.error("Template sidebar non trovato per indice:", index);
            parentElement.innerHTML = "Errore caricamento sidebar.";
        }
    };

    pubSub.subscribe("sidebar", (data) => {
        console.log(data);
        if (Array.isArray(data)) {
            variable[1] = `<ul class="nav flex-column list-unstyled">${data.map(element => {
                return `<li class="nav-item"><a class="nav-link" href="#${element.id}">${element.title}</a></li>`;
            }).join('')}</ul>`;
            render();
        } else {
            console.error("Dati non validi ricevuti per sidebar:", data);
        }
    });

    return {
        render: render,
    };
}
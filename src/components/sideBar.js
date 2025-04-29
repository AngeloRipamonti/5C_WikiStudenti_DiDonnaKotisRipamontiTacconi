export function sideBarComponent(idParentElement, pubSub) {
    const parentElement = document.getElementById(idParentElement);
    let index = idParentElement == "sidebarAccount" ? 0 : 1;
    const variable = {
        0: `<aside class="doc__nav">
        <ul>
          <li class="js-btn selected">Editor</li>
          <li class="js-btn">Approver</li>
        </ul>
      </aside>`,

        1: `<ul class="nav flex-column ">
        <li class="nav-item"><a class="nav-link" href="#UML">UML/ER/Logic Model</a>
        </li>
    </ul>`

    };

    const render = () => {
        if (variable[index]) {
            parentElement.innerHTML = variable[index];
        } else {
            console.error("Template sidebar non trovato per indice:", index);
            parentElement.innerHTML = "Errore caricamento sidebar.";
        }
    };

    pubSub.subscribe("sidebar", (data) => {
        console.log(data);
        if (Array.isArray(data)) {
            variable[1] = `<ul class="nav flex-column ">${data.map(element => {
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
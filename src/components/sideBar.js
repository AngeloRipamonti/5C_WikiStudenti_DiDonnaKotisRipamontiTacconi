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

    // Definisci la funzione di rendering - QUESTA è l'UNICA funzione render
    const render = () => {
        // Controlla se esiste un template per l'indice corrente
        if (variable[index]) {
            // Imposta l'innerHTML dell'elemento DOM reale passato alla funzione
            parentElement.innerHTML = variable[index];
        } else {
            console.error("Template sidebar non trovato per indice:", index);
            // Opzionale: svuota la sidebar o mostra un messaggio di errore
            parentElement.innerHTML = "Errore caricamento sidebar.";
        }
        // Rimuovi handleLink se non è usato dal template variable[index]
    };

    // Iscriviti agli aggiornamenti della sidebar tramite Pub/Sub
    pubSub.subscribe("sidebar", (data) => {
        console.log(data);
        // Aggiorna il template variable[1] con i nuovi link ricevuti
        if (Array.isArray(data)) {
            variable[1] = `<ul class="nav flex-column ">${data.map(element => {
                // Assumiamo che ogni elemento abbia id e title
                return `<li class="nav-item"><a class="nav-link" href="#${element.id}">${element.title}</a></li>`;
            }).join('')}</ul>`; // Usa join('') per unire gli elementi dell'array in una stringa singola
            // **TRIGGERA IL RENDERING** per mostrare i nuovi dati
            render();
        } else {
            console.error("Dati non validi ricevuti per sidebar:", data);
            // Gestisci l'errore
        }
    });

    return {
        render: render,
    };
}
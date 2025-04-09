/*
    DA MODIFICARE
*/

export function database() {
    const API_URL = 'http://localhost:3000/src/service/api.php'; 

    return {
        getAccount: async function (username, password){
            let response = await fetch(url,{
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "table": "users",
                    "username": username,
                    "password": password
                })
            });

        },
        getData: async function (id = null) {
                /*
                async function getData() {
                    try {
                        let response = await fetch(API_URL);
                        let data = await response.json();
                        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
                    } catch (error) {
                        console.error("Errore nel recupero dei dati:", error);
                    }
                }
                */
            let url = API_URL;
            if (id) {
                url += `?id=${id}`; // Aggiunge l'ID alla richiesta
            }
        
            try {
                let response = await fetch(url);
                let data = await response.json();
                
                document.getElementById("result").innerText = JSON.stringify(data, null, 2);
            } catch (error) {
                console.error("Errore nel recupero dei dati:", error);
            }
        },
        postData: async function () {
            let nome = document.getElementById("nome").value;
            let cognome = document.getElementById("cognome").value;
            let residenza = document.getElementById("residenza").value;
            let stipendio = document.getElementById("stipendio").value;
            let resultDiv = document.getElementById("result");
        
            if (!nome || !cognome || !residenza || !stipendio) {
                resultDiv.innerHTML = "<p style='color: red;'>Compila tutti i campi!</p>";
                return;
            }
        
            try {
                let response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nome, cognome, residenza, stipendio })
                });
        
                let result = await response.json();
                
                resultDiv.innerHTML = "<p style='color: green;'>Dati inseriti: " + JSON.stringify(result) + "</p>";
            } catch (error) {
                console.error("Errore nell'invio dei dati:", error);
                resultDiv.innerHTML = "<p style='color: red;'>Errore durante l'invio!</p>";
            }
        },
        updateData: async function () {
            let id = document.getElementById("idPut").value;
            let stipendio = document.getElementById("stipendioPut").value;
            let resultDiv = document.getElementById("result");
        
            if (!id ||  !stipendio) {
                resultDiv.innerHTML = "<p style='color: red;'>Compila tutti i campi per aggiornare!</p>";
                return;
            }
        
            try {
                let response = await fetch(API_URL, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id, stipendio })
                });
        
                let result = await response.json();
                
                resultDiv.innerHTML = "<p style='color: blue;'>Dati aggiornati: " + JSON.stringify(result) + "</p>";
            } catch (error) {
                console.error("Errore nell'aggiornamento dei dati:", error);
                resultDiv.innerHTML = "<p style='color: red;'>Errore durante l'aggiornamento!</p>";
            }
        },
        deleteData: async function () {
            let id = document.getElementById("idDel").value;
            let resultDiv = document.getElementById("result");
        
            if (!id) {
                resultDiv.innerHTML = "<p style='color: red;'>Inserisci un ID da eliminare!</p>";
                return;
            }
        
            try {
                let response = await fetch(API_URL, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id })
                });
        
                let result = await response.json();
                resultDiv.innerHTML = "<p style='color: orange;'>Dati eliminati: " + JSON.stringify(result) + "</p>";
            } catch (error) {
                console.error("Errore nell'eliminazione dei dati:", error);
                resultDiv.innerHTML = "<p style='color: red;'>Errore durante l'eliminazione!</p>";
            }
        }
    }
}
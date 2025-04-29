export function database() {
    const url = 'http://localhost:8050/src/service/api.php';
    const databaseDict = {
        register: async function (email, password, name, birth, classe, role){
          let response = await fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  "table": "users",
                  "email": email,
                  "password": password,
                  "name": name,
                  "class": classe,
                  "birth_date": birth,
                  "role": role
              })
          });
          return await response.json();
        },
        login: async function (email, password){
            let response = await fetch(url + `?${new URLSearchParams({ table: "users", email: email, password: password }).toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            return await response.json();
          },

        sidebar: async function () {
            let response = await fetch(url + `?${new URLSearchParams({ table: "sidebar" }).toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            return await response.json();  
        },

        searchbar: async function (value) {
            let response = await fetch(url + `?${new URLSearchParams({ table: "searchbar", value: value }).toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            return await response.json();
        },
        content6rand: async function(){
            let response = await fetch(url + `?${new URLSearchParams({table: "homeDefault"}).toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return await response.json();
        }
    }
    return databaseDict;
}
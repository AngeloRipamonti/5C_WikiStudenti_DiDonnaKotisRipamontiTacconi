export function database(pubSub) {
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
        }
    }
    pubSub.subscribe("loginComplete", async (data)=>{
        let response = await databaseDict.login(data.email, data.password);
        pubSub.publish("loginComplete", response);  
    })
    pubSub.subscribe("register", async (data)=>{
        //Controlli data
        console.log("dwfj")
        let response = await databaseDict.register(data.email, data.password, data.name, data.dateOfBirth, data.class, data.role);
        pubSub.publish("registerComplete", response);   
    })
    pubSub.subscribe("search", async (data)=>{
        //Controlli data
        let response = await databaseDict.searchbar(data);
        console.log(response);
       pubSub.publish("searchbarCompete", response);
    })



    return databaseDict;
    
}
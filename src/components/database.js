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
        }
    }
    pubSub.subscribe("register", async (data)=>{
        //Controlli data
        let response = await databaseDict.register(data.email, data.password, data.name, data.dateOfBirth, data.class, data.role);
        pubSub.publish("registerComplete", response);
    })
    return databaseDict;
}
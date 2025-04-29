export function user(parentElement, data, pubSub) {

    //in base al ruolo ha determinati metodi
    let role;
    
    return{
        getRole: function(){

        },
        approveVersion : function(){
            
        },
        approveUser: function(){
            
        },
        approveContent: function(){
            
        },
        rejectVersion: function(){
            
        },
        rejectUser: function(){
            
        },
        rejectContent: function(){
            
        },
        setUsername: function(){
            
        },
        setEmail: function(){
            
        },
        setPassword: function(){
            
        },
        renderAccount: function(){
            console.log(parentElement)
            parentElement.innerHTML = `Dati:
            <ul>
                <li><span>Nome <input type="text" value="${data.name}" disabled></span></li>
                <li><span>Anno di Nascita <input type="date" value="${data.birth_date}" disabled></span></li>
                <li><span>Email <input type="email" value="${data.email}" disabled></span></li>
                <li><span>Password <input type="password" value="${data.password}" disabled></span></li>
                <li><span>Classe <input type="text" value="${data.class}" disabled></span></li>
            </ul>`
        }
    }
}
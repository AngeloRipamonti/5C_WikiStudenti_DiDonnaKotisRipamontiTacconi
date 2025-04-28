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
            parentElement.innerHTML = `Dati:
            <ul>
                <li>Nome </li>
                <li>Anno di Nascita</li>
                <li>Email</li>
                <li>Password</li>
                <li>Classe</li>
            </ul>`
        }
    }
}
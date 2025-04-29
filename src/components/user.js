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
        renderAccount: function () {
            parentElement.innerHTML = `Dati:
                <ul class="list-unstyled small" id="accountData">
                    <li><span>Nome 
                        <input type="text" value="${data.name}" column="name" disabled class="fieldInput form-control form-control-sm d-inline-block w-auto ms-2" id="inputName">
                        <button class="btn btn-outline-dark btn-sm ms-2 fieldButton" id="modifyName">
                            <i class="fa fa-pencil"></i> 
                        </button>
                    </span></li>
        
                    <li><span>Anno di Nascita 
                        <input type="date" value="${data.birth_date}" disabled class="form-control form-control-sm d-inline-block w-auto ms-2" id="inputBirth">
                    </span></li>
        
                    <li><span>Email 
                        <input type="email" value="${data.email}" disabled class="form-control form-control-sm d-inline-block w-auto ms-2" id="inputEmail">
                    </span></li>
        
                    <li><span>Password 
                        <input type="password" value="${data.password}" column="password" disabled class="fieldInput form-control form-control-sm d-inline-block w-auto ms-2" id="inputPassword">
                        <button class="btn btn-outline-dark btn-sm ms-2 fieldButton" id="modifyPassword">
                            <i class="fa fa-pencil"></i> 
                        </button>
                    </span></li>
        
                    <li><span>Classe 
                        <input type="text" value="${data.class}" column="class" disabled class="fieldInput form-control form-control-sm d-inline-block w-auto ms-2" id="inputClass">
                        <button class="btn btn-outline-dark btn-sm ms-2 fieldButton" id="modifyClass">
                            <i class="fa fa-pencil"></i> 
                        </button>
                    </span></li>
                </ul>`;

                const inputs = document.querySelectorAll(".fieldInput");
                document.querySelectorAll(".fieldButton").forEach((btn, i) => {
                    btn.onclick = ()=>{
                        if(inputs[i].disabled){
                            inputs[i].disabled = false;
                            btn.innerHTML = `<i class="fa fa-check"></i>`;
                            if(inputs[i].getAttribute("column") == "password") inputs[i].value = "";
                        }
                        else{
                            pubSub.publish("modifyAccount", {
                                value: inputs[i].value,
                                table: "users",
                                column: inputs[i].getAttribute("column")
                            });
                            pubSub.subscribe("confirmModifyAccount", (data) => {
                                inputs[i].disabled = true;
                                btn.innerHTML = `<i class="fa fa-pencil"></i>`
                            });
                        }
                    }
                });
        }        
    }
}
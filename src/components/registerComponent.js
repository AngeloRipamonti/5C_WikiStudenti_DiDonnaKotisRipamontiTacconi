export const registerComponent = (htmlelement) => {

    return{
        render : () => {
            let html = `
                   <h2>Register</h2>
<div class="input-container">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email">
</div>
<div class="input-container">
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Password">
</div>
<div class="input-container">
    <label>Register as:</label>
    <div class="role-selection">
        <input type="radio" id="approver" name="role" value="approver">
        <label class="role-btn black" for="approver">approver</label>
        <input type="radio" id="editor" name="role" value="editor">
        <label class="role-btn gray" for="editor">editor</label>
    </div>
</div>
<div id="result"></div>`;
            htmlelement.innerHTML = html;
            
            document.querySelector("#registerBtn").onclick = () => {
                let username = document.querySelector("#username").value;
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#password").value;
                
            }
        },
    }
}
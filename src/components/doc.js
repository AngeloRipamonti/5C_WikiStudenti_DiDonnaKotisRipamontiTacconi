export function doc(parentElement, pubsub) {
    let data;
    function render(){
            /*parentElement = `${data.map((e, i) => {
                return `<article ${i !== 0 ? "class='d-none'" : ""}>
                            <h1>${e.title}</h1>
                            <h4>${e.description}</h4>
                            <p>${e.content}</p>
                            <h6>${e.author_email} - ${e.approver_email}</h6>
                        </article>`
            }).join("")}`;*/
    }
    return{
        build: function (data){
            data = this.data;
            render();
        }
    }
}

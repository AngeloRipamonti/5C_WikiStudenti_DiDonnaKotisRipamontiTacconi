export function doc(parentElement, pubsub) {
    let data;
    function render(){
        console.log(data);
            parentElement.innerHTML = `${data?.map((e, i) => {
                return `<article ${i !== 0 ? "class='d-none hVh'" : "class='hVh'"}>
                            <h1>${e.title}</h1>
                            <h4>${e.description}</h4>
                            <p>${e.content}</p>
                            <h6>${e.author_email} - ${e.approver_email}</h6>
                        </article>`
            }).join("") || "No docs available"}`;
    }
    return{
        build: function (values){
            console.log(values);
            data = values;
            render();
        }
    }
}

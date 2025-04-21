Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [this[i], this[j]] = [this[j], this[i]];   
    }
    return this;
}
export function content(parentElement, pubSub){
    const template = `<a href="#$ID">
                        <div class="feature__item wiki-page" id="$ID">
                            <h3 class="section__title">$TITLE</h3>
                            <p>$ABSTRACT</p>
                        </div>
                      </a>`
    let data = [];
    function render(id, title, abstract){
        return template.replaceAll("$ID", id).replace("$TITLE", title).replace("$ABSTRACT", abstract);
    }
    return {
        build: function (values){
            data = values;
            //pubSub.subscribe("content", (value) => data = value)
        },
        homePage: function () {
            let html = "";
            data.shuffle();
            const end = data.length > 6 ? 6 : data.length;
            for(let i = 0; i < end; i++){
                html += render(data[i].id, data[i].title, data[i].description);
            }
            parentElement.innerHTML = html;
        }
    }
}
export const searchBarComponent = (parentElement, PubSub) => {
    return {
        render: () => {
            return new Promise((resolve, reject) => {
                try {
                    const html = `
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <input type="text" id="table-search" class="form-input bg-light border radius-md width-80" placeholder="Search for items">
                            <button id="search-table" type="button"><i class="fa fa-search"></i></button>
                        </div>
                    `;
                    parentElement.innerHTML = html;

                    document.getElementById("search-table").onclick = () => {
                        const value = document.getElementById("table-search").value.trim();
                        if (!value) return;

                        PubSub.publish("search", value);
                    };

                    resolve(html);
                } catch (e) {
                    reject(e);
                }
            });
        }
    };
};

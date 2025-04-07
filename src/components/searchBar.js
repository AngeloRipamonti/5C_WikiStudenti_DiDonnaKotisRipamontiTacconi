export const searchBarComponent = (parentElement) => {
    let onSearch = null;

    return {
        render: () => {
            return new Promise((resolve, reject) => {
                try {
                    const html = `
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                            </div>
                            <input type="text" id="table-search" class="form-input bg-light border radius-md width-80" placeholder="Search for items">
                            <button id="search-table" type="button"><i class="fa fa-search"></i></button>
                        </div>
                    `;

                    parentElement.innerHTML = html;

                    document.getElementById("search-table").onclick = () => {
                        const input = document.getElementById("table-search");
                        if (onSearch) onSearch(input.value.trim());
                    };

                    resolve(html);
                } catch (e) {
                    reject(e);
                }
            });
        },

        // Permette di assegnare il comportamento alla ricerca
        onSearch: (callback) => {
            onSearch = callback;
        }
    };
};

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
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                            <button id="search-table" type="button" class="absolute inset-y-0 right-0 px-4 py-2 text-white bg-purple-700 border border-transparent rounded-lg hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700">Search</button>
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

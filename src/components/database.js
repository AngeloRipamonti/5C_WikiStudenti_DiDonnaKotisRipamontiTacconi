export function database() {
    const url = 'http://localhost:8050/src/service/api.php';

    return {
        register: async function (email, password, name, birth_date, userClass, role) {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    table: "users",
                    email,
                    password,
                    name,
                    birth_date,
                    class: userClass,
                    role
                })
            });
            return await response.json();
        },

        login: async function (email, password) {
            const params = new URLSearchParams({ table: "users", email, password });
            const response = await fetch(`${url}?${params.toString()}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        sidebar: async function () {
            const response = await fetch(`${url}?table=sidebar`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        searchbar: async function (value) {
            const response = await fetch(`${url}?table=searchbar&value=${encodeURIComponent(value)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        content6rand: async function () {
            const response = await fetch(`${url}?table=homeDefault`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        updateAccount: async function (column, email, value) {
            const response = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    table: "users",
                    column,
                    email,
                    value
                })
            });
            return await response.json();
        },

        approverContent: async function () {
            const response = await fetch(`${url}?table=approverContent`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        getVersions: async function (contentID) {
            const response = await fetch(`${url}?table=versions&id=${contentID}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },

        getVersion: async function (contentID, version) {
            const response = await fetch(`${url}?table=content&id=${contentID}&version=${version}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        },
    };
}
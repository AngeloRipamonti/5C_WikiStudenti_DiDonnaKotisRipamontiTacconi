export function navbar(parentElement, pubsub) {
    let elements;

    return {
        build: function(list) {
            elements = list;
        },
        render: function() {

            parentElement.innerHTML = "";
        }
    };
}
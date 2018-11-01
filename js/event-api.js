let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));

}

const eventApi = {
    add(item) {
        items.push(item);saveItems;
    }
};

export default eventApi;
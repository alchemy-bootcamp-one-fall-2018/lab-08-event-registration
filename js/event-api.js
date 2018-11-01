let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const itemsApi = {
    add(item) {
        items.push(item);
        saveItems();
    }
};

export default itemsApi;
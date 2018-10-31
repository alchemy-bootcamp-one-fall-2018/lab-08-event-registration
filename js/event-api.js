let items = [];

function saveItems() {
    localStorage.setItems('items', JSON.stringify(items));
}

const itemsApi = {
    add(item) {
        items.push(item);
        saveItems();
    }
}

export default itemsApi
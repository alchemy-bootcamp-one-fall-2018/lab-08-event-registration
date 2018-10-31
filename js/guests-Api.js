let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const guestsApi = {
    add(item) {

        items.push(item);

        saveItems();
    }
};


export default guestsApi;
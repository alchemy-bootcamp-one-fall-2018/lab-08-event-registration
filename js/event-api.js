
let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const registrantsApi = {
    add(item) {
        // 1. add to our array
        items.push(item);
        // 2. save array to localStorage
        saveItems();
    }
};

export default registrantsApi;
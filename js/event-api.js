
let items = [];

function saveItems(){
    localStorage.setItem('items', JSON.stringify(items));
}

const itemsApi = {
    add(item) {

        // add to our array
        items.push(item);
        // save array to local storage
        saveItems();
    }
};

export default itemsApi;
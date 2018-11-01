let creatures = [];

function saveItems() {
    localStorage.setItem('creatures', JSON.stringify(creatures));
}

const itemsApi = {
    add(creature) {
        // 1. add to our array
        creatures.push(creature);
        // 2. save array to localStorage
        saveItems();
    }
};

export default itemsApi;
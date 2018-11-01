
let guests = [];

function saveGuests() {
    localStorage.setItem('guests', JSON.stringify(guests));
}

const guestsApi = {
    add(guest) {
        guests.push(guest);
        saveGuests();
    }
};


export default guestsApi;
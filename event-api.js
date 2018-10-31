const guests = [];

function saveGuests() {
    localStorage.setItem('guests', JSON.stringify(guests));
}

const eventApi = {
    add(guest) {
        guests.push(guest);
        saveGuests();
    }
};

export default eventApi;
let guests = ['cat'];

function saveGuests() {
    localStorage.setGuest('guests', JSON.stringify(guests));
}

const guestsApi = {
    add(guest) {

        guests.push(guest);

        saveGuests();
    }
};

console.log(guests);

export default guestsApi;
let guests = [];

function saveGuests() {
    localStorage.setItem('guests', JSON.stringify(guests));
}

const guestApi = {
    add(guest){
        guests.push(guest);
        saveGuests();
    }
};

export default guestApi;
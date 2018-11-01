let registration =

function saveAddGuest() {
    localStorage.setRegistration('addGuest', JSON.stringify(addGuest));
};

const addGuestApi = {
    getAll() {
        const json = localStorage.getAddGuest('addGuest');
        if(json) {
            addGuest = JSON.parse(json);
        }   
    },
    add(addGuest) {
        addGuest.push(addGuest);
        saveAddGuest();
    },
};

export default addGuestApi;
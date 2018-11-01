let registrations = [];

function saveReg() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}






const regApi = {
    add(registration) {
        registrations.push(registration);
        saveReg();
    }
};

export default regApi;
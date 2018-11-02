
let registrations = [];

function saveRegistrations() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

const registrationsApi = {
    add(registration) {
        registrations.push(registration);
        saveRegistrations();
    }
};

export default registrationsApi;
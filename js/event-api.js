
let registrations = [];

function saveRegistrations() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

const registrationsApi = {
    add(registration) {
        registration.push(registration);
        saveRegistrations();
    }
};

export default registrationsApi;
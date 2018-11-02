let registrations = [];

function saveRegistration() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

const registrationApi = {
    

    add(registration) {
        registrations.push(registration);
        saveRegistration();
    },
};

export default registrationApi;

// TODO: add local storage back


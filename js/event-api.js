
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

// let attendees = [];
// const registrationsApi = {
//     init(callBack) {
//         // eslint-disable-next-line
//         console.log('got to init');
//         const json = localStorage.getItem('registrations');
//         if(json) {
//             attendees = JSON.parse(json);
//         }
//         callBack(attendees);
//     },
//     add(registration) {
//         registrations.push(registration);
//         saveRegistrations();
//     }
// };

export default registrationsApi;
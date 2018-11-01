// import getInfo from './registration-form.js';

let attendees = [];

console.log('initial storage', readStorage());

function saveInfo() {
    localStorage.setItem('attendees', JSON.stringify(attendees));

    console.log('after storing read', readStorage());
}

function readStorage() {
    return JSON.parse(localStorage.getItem('attendees'));
}

function add(info) {
    attendees = readStorage();
    if(attendees) {
        attendees.push(info);
    } else {
        attendees = [info];
    }
    saveInfo();
}

const infoApi = {
    init(info) {
        add(info);
    }
};

export default infoApi;
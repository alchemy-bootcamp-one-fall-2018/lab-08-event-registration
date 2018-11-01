let attendees = [];

function saveInfo() {
    localStorage.setItem('attendees', JSON.stringify(attendees));
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
let attendees = [];

function saveAttendees() {
    localStorage.setItem('attendees', JSON.stringify(attendees));
}

const eventApi = {
    add(attendee) {
        attendees.push(attendee);
        saveAttendees();
    }
};

export default eventApi;
let events = [];

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

const eventApi = {
    add(event) {
        events.push(event);
        saveEvents();
    }
};

export default eventApi;
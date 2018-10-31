let events = [];

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

const eventsApi = {
    add(event) {
        events.push(event);

        saveEvents();
    }
};

export default eventsApi;
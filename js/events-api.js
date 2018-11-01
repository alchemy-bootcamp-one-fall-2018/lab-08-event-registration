let events = [];

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

const eventsApi = {
    getAll() {
        const json = localStorage.getItem('events');
        if(json) {
            events = JSON.parse(json);
        }
        return events;
    },
    add(event) {
        events.push(event);

        saveEvents();
    }
};

export default eventsApi;
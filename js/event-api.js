
let event = [];

function saveEvent() {
    localStorage.setEvent('event', JSON.stringify(event));
}

const eventApi = {
    add(event) {
        event.push(event);
        saveEvent();
    }
};

export default eventApi;
import eventsApi from './js/events-api.js';
import eventForm from './js/event-form.js';
import eventList from './js/event-list.js';

eventForm.init(function(event) {
    eventsApi.add(event);
    eventList.add(event);
});

import eventsApi from './events-api.js';
import eventForm from './event-form.js';
import eventList from './event-list.js';

eventForm.init(function(event) {
    eventsApi.add(event);
    eventList.add(event);
});

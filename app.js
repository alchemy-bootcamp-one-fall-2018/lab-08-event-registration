import eventsApi from './events-api.js';
import eventForm from './event-form.js';

eventForm.init(function(event) {
    eventsApi.add(event);
});

import eventApi from './event-api.js';
import eventForm from './registration-form.js';

eventForm.init(function(event) {
    eventApi.add(event);
});

export default eventForm;
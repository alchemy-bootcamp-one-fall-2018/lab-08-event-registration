import eventsApi from './events-api.js';
import registrationForm from './item-form.js';

registrationForm.init(function(item) {
    eventsApi.add(item);
});
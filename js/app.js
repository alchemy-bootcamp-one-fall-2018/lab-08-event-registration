
import eventApi from './js/event-api.js';
import registrationForm from './js/registration-form';

registrationForm.init(function(item) {
    eventApi.add(item);
});
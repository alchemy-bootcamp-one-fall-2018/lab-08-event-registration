
import eventApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(guest) {
    eventApi.add(guest);
});
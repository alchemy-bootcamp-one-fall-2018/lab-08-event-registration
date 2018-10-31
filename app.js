import registrationForm from './registration-form.js';
import eventApi from './event-api.js';


registrationForm.init(function(guest) {
    eventApi.add(guest);
});




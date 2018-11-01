import eventApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(item) {
    eventApi.add(item);
});

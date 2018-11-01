import registrantsApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(registration) {
    registrantsApi.add(registration);
});
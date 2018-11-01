import guestsApi from './event-api.js';
import registrationForm from './registration-form.js';



registrationForm.init(function(banana) {
    guestsApi.add('testing', banana);
});

// registrationForm.;
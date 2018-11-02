import registrationApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(guest) {
    registrationApi.add(guest);

});
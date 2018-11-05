import registrationsApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(registration) {
    registrationsApi.add(registration);

});

export default registrationForm;
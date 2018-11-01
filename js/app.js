import registrationsApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationsApi.init(function(attendees) {
    console.log(attendees);

});

registrationForm.init(function(formData) {
    console.log(formData);
});

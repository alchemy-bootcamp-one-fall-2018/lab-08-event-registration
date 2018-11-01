import registrationsApi from './event-api.js';
import registrationForm from './registration-form.js';

registrationsApi.init(function(attendees) {
    // eslint-disable-next-line
    console.log(attendees);

});

registrationForm.init(function(formData) {
    // eslint-disable-next-line
    console.log(formData);
});

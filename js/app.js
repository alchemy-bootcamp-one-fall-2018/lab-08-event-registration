import formData from './registrationForm.js';
import dataApi from './eventApi.js';


// fire off the init function built into the formData variable that is imported from the registration form
//the init function/method collects all the data in the form, listens for the submit event AND adds all the data as sets of keys/values in the Array created in registration form called personInfo




formData.init(function(formInfo) {
    console.log('app folder', formInfo);
    dataApi.add(formInfo);

});
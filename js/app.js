import formData from './registrationForm.js';
import dataApi from './eventApi.js';




formData.init(function(name) {
    console.log('app folder', name);
});
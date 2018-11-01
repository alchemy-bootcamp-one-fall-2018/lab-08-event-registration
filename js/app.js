import regApi from './event-api.js';
import regForm from './registration-form.js';

regForm.init(function(registration) {
    regApi.add(registration);
});
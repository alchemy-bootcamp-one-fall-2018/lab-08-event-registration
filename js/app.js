/* eslint-disable no-console */

import guestsApi from './guests-api.js';
import registrationForm from './registration-form.js';

registrationForm.init(function(guest) {
    guestsApi.add(guest);
    console.log(guest);
});
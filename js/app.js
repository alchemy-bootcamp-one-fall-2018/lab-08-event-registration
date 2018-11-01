import guestApi from './guest-api.js';
import guestForm from './guest-form.js';

guestForm.init(function(guest){
    guestApi.add(guest);
});
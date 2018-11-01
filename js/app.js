import itemsApi from './event-api.js';
import itemForm from './registration-form.js';


itemForm.init(function(attendee){
    itemsApi.add(attendee);
     console.log(attendee);
    
});
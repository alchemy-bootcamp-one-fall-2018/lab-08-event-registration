import itemForm from './registration-form.js';
import itemsApi from './event-api.js';

itemForm.init(function(item){
    itemsApi.add(item); 
}); 
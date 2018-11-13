import itemsApi from './items-api.js';
import eventFormDetails from './registration-form.js';

eventFormDetails.init(function(items) {
    itemsApi.add(items);
});

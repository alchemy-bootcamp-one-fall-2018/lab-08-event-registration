import itemsApi from './event-api.js';
import itemForm from './registration-form.js';

itemForm.init(function(item) {
    itemsApi.add(item);
});


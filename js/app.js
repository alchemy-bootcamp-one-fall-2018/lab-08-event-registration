import itemsApi from './items-api.js';
import itemForm from './items-form.js';

itemForm.init(function(item) {
    itemsApi.add(item);
});


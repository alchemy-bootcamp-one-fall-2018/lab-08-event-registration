import itemForm from './item-form.js';
import itemsApi from './items-api.js';

itemForm.init(function(item) {
    itemsApi.add(item);
});
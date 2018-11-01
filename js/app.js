import itemsApi from './items-api.js';
import itemForm from './item-form.js';

itemForm.init(function(creature) {
    itemsApi.add(creature);
});


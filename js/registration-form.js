
const form = document.getElementById('form');

const registrationForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const item = {};

            item.title = elements.title.value;

            onAdd(item);
        });
    }
};

export default registrationForm;
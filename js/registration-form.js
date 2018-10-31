const form = document.getElementById('event-registration');
// const name = document.getElementById('name');

const eventForm = {
    init(onAdd) {

        // name.addEventListener('change', function() {
        //    console.log('name', name);
        // });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const registration = {};

            registration.name = elements.name.value;
            console.log('start', registration.net);

            onAdd(registration);

            form.reset();
        });
    }
};

export default eventForm; 
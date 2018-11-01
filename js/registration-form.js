const form = document.getElementById('event-registration');
const message = document.getElementById('message');
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
            const checkedMeal = document.querySelector('input[name="meal"]:checked');

            registration.name = elements.name.value;
            // console.log('start', registration.name);

            registration.prefix = elements.prefix.value;
            // console.log('worked, registration.', registration.prefix);

            registration.email = elements.email.value;
            // console.log('email', registration.email);

            registration.guests = elements.guests.value;
            // console.log('guests', registration.guests.value);

            registration.shirt = elements.shirt.value;
            // console.log('shirt', registration.shirt);

            registration.meal = checkedMeal.value;
            // console.log('meal', registration.meal);


            onAdd(registration);

            message.textContent = 'Thanks for registering. See you soon!';

        });
    }
};
form.reset();

export default eventForm; 
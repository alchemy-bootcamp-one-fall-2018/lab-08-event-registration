const form = document.getElementById('event-registration');
// const person = document.getElementById('person');

const registrationForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const registrations = {};

            registrations.name = elements.person.value;

            registrations.pronoun = elements.pronoun.value;

            registrations.email = elements.email.value;
            onAdd(registrations);
        });
    }
};

export default registrationForm;
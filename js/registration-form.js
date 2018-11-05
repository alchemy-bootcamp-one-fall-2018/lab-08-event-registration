const form = document.getElementById('event-registration');
const formResponse = document.getElementById('submit-message');

const registrationForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const registrations = {};

            registrations.name = elements.person.value;
            registrations.pronoun = elements.pronoun.value;
            registrations.email = elements.email.value;
            registrations.tshirt = elements.tshirt.value;
            registrations.color = elements.color.value;
            registrations.guests = elements.guests.value;
            registrations.meal = elements.meal.value;

            onAdd(registrations);
            formResponse.textContent = 'Thanks for registering!';
            form.reset();
            setTimeout(function() {
                clearMessage();
                window.location.reload();
            }, 4000);
        });        
        function clearMessage() {
            formResponse.textContent = '';
        }
        // registrationForm.addEventListener('change', clearMessage);
    }
};


export default registrationForm;

const form = document.getElementById('event-registration');
const message = document.getElementById('message');

const registrationForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const guest = {};

            guest.name = elements['name'].value;
            guest.email = elements['email'].value;
            guest.pronoun = elements['pronoun'].value;
            guest.shirtSize = elements['shirt-size'].value;
            guest.shirtStyle = elements['shirt-style'].value;
            guest.shirtColor = elements['shirt-color'].value;
            guest.guests = elements['guests'].value;
            guest.meal = elements['meal'].value;

            onAdd(guest);

            message.textContent = 'Thanks for your RSVP.';

            form.reset();

        });

    }
};

export default registrationForm;
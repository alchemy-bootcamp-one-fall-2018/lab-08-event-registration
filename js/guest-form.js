const form = document.getElementById('event-form');
const name = document.getElementById('name');

const guestForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const attendee = {};

            attendee.name = elements.name.value;

            attendee.pronoun = elements.pronoun.value;

            attendee.email = elements.email.value;
            
            attendee.shirt = elements.shirt.value;

            attendee.color = elements.color.value;

            attendee.guestNumber = elements.guestNumber.value;

            console.log(attendee);

            onAdd(attendee);

            form.reset();

        });
    }
};

export default guestForm;
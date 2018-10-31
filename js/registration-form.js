const form = document.getElementById('auction-registration');
const message = document.getElementById('message');

const registrationForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            //form elements collection from all form inputs
            const elements = form.elements;

            //data object to store information in
            const attendee = {};

            //gather data
            attendee.firstName = elements['first-name'].value;
            attendee.lastName = elements['last-name'].value;
            attendee.email = elements.email.value;
            attendee.pronoun = elements.pronoun.value;

            attendee.shirtStyle = elements['shirt-style'].value;
            attendee.shirtSize = elements['shirt-size'].value;
            attendee.shirtColor = elements['shirt-color'].value;

            attendee.guestNumber = parseInt(elements['guest-number'].value);
            attendee.meal = elements.meal.value;

            onAdd(attendee);

            message.textContent = 'Thank you for registering for the Cat Adoption Team 10th Annual Auction. We look forward to seeing you there!';

            form.reset();

        });
    }
};

export default registrationForm;


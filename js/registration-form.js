const form = document.getElementById('auction-registration');
//const firstName = document.getElementById('first-name');
//const lastName = document.getElementById('last-name');
// const email = document.getElementById('email');
// const he = document.getElementById('he');
// const she = document.getElementById('she');
// const they = document.getElementById('they');
// const noAnswer = document.getElementById('no-answer');
// const shirtStyle = document.getElementById('shirt-style');
// const shirtSize = document.getElementById('shirt-size');
// const shirtColor = document.getElementById('shirt-color');
// const guestNumber = document.getElementById('guest-number');
// const steak = document.getElementById('steak');
// const salmon = document.getElementById('salmon');
// const glutenFree = document.getElementById('gluten-free');
// const vegan = document.getElementById('vegan');
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
            attendee.firstName = elements.firstname.value;
            attendee.lastName = elements.lastname.value;

            attendee.email = elements.email.value;

            onAdd(attendee);

            message.textContent = 'Thank you for registering for the Cat Adoption Team 10th Annual Auction. We look forward to seeing you there!';

            form.reset();


        });
    }
};

export default registrationForm;


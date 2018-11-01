
const form = document.getElementById('event-registration');

const message = document.getElementById('message');

const registrationForm = {
    init(onAdd) {
        
        

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // form elements collection
            const elements = form.elements;

            // data object
            const registration = {};
            
            // gather data, ie:
            registration.firstName = elements['first-name'].value;
            registration.lastName = elements['last-name'].value;
            registration.email = elements.email.value;
            registration.pronoun = elements.pronouns.value;
            registration.size = elements.size.value;
            registration.style = elements.style.value;
            registration.color = elements.color.value;
            registration.guests = elements.guests.value;
            registration.mealSelected = elements['meal-selected'].value;

            // call the callback with new item
            onAdd(registration);

            // use an onscreen message
            message.textContent = 'Thanks for your interest! We look forward to meeting you soon!';
            
            form.reset();

        });

    }
};

export default registrationForm;
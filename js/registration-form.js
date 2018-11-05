
const form = document.getElementById('event-registration');
const message = document.getElementById('message');


const registrationForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            
            const guest = {};
            
            guest.name = elements.name.value;
            guest.pronoun = elements.pronoun.value;
            guest.email = elements.email.value;
            guest.dogNumber = parseInt(elements['dog-number'].value);

            guest.shirtSize = elements.size.value;
            guest.shirtStyle = elements.style.value;
            guest.shirtColor = elements.color.value;

            guest.meal = elements.meal.value;

            onAdd(guest);

            message.textContent = 'Thank you for registering!';

            form.reset();
            
        }); 
    }
};
export default registrationForm;

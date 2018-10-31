const form = document.getElementById('event-form');
const success = document.getElementById('success');

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

            attendee.meal = elements.meal.value;

            attendee.diet = [];
            
            for(let i = 0; i < elements.diet.value.length; i++){
                const diet = elements.diet[i];
                if(diet.checked){
                    attendee.diet.push(diet.value);
                }
            }
            
            console.log(attendee.diet);
            // console.log(attendee);

            onAdd(attendee);

            success.textContent = 'Thanks for registering! We"ll be sending you an email confirmation shortly.';

            form.reset();

        });
    }
};

export default guestForm;
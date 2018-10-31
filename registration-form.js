const form = document.getElementById('event-form');

const elements = form.elements;

const registrationForm = {

    init(onAdd) {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const guestDetail = {};

            //Name and Contact
            guestDetail.name = elements.name.value;
            guestDetail.pronoun = elements.pronoun.value;
            guestDetail.email = elements.email.value;

            //T-shirt
            guestDetail.size = elements.size.value;
            guestDetail.style = elements.style.value;
            guestDetail.color = elements.color.value;

            //Number of guests
            guestDetail.bringing = elements.bringing.value;

            //Meal
            guestDetail.meal = elements.meal.value;

            onAdd(guestDetail);
            form.reset();
        });
    }
};

export default registrationForm;
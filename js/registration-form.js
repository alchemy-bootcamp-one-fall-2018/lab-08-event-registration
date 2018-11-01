const form = document.getElementById('form');


const registrationForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const guestInfo = {};

            guestInfo.first = elements.first.value;
            guestInfo.last = elements.last.value;
            guestInfo.pronoun = elements.pronoun.value;
            guestInfo.email = elements.email.value;
            guestInfo.size = elements.size.value;
            guestInfo.meal = elements.meal.value;

            console.log('form test', guestInfo);

            onAdd(form);

        });
    }
};


export default registrationForm;

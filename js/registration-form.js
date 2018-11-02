const form = document.getElementById('mission-control');

const registrationForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const guest = {};

            guest.pronouns = elements.pronouns.value;
            guest.firstName = elements.firstName.value;
            guest.lastName = elements.lastName.value;
            guest.email = elements.email.value;
           
            onAdd(guest);

            form.reset();
        });
    }
};

export default registrationForm;
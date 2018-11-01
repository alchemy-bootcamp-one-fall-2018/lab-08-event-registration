const form = document.getElementById('event-application');


const eventForm = {
    init(onAdd) {
        const elements = form.elements;
        const events = {};

        elements.pronoun.forEach(item => {

            item.addEventListener('change', function() {
                if(this.checked) events.pronoun = this.value;
                // background-colors, unneeded
                // form.classList.forEach(item => form.classList.remove(item));
                // form.classList.add(this.value);
            });
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            events.firstName = elements.firstName.value;
            events.lastName = elements.lastName.value;

            events.talks = [];

            elements.talks.forEach(talk => {
                if(talk.checked) events.talks.push(talk.value);
            }); 

            events.tshirt = elements.tshirt.value;

            onAdd(events);

            form.reset();

        });

    }
};

export default eventForm;
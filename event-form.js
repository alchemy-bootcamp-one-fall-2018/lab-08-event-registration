const form = document.getElementById('event-application');


const eventForm = {
    init(onAdd) {
        const elements = form.elements;
        const events = {};

        elements.pronoun.forEach((item) => {

            item.addEventListener('change', function() {
                if(this.checked) events.pronoun = this.value;

            });
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            events.firstName = elements.firstName.value;
            events.lastName = elements.lastName.value;

            events.talks = [];

            for(let i = 0; i < elements.talks.length; i++) {
                const talk = elements.talks[i];
                if(talk.checked) {
                    events.talks.push(talk.value);
                }
            }

            events.tshirt = elements.tshirt.value;

            onAdd(events);

            form.reset();

        });

    }
};

export default eventForm;
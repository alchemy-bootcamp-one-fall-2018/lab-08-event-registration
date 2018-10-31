const form = document.getElementById('registration-form');







const itemForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();                        //prevents flashing thing
            const elements = form.elements;

            const attendee = {};
            attendee.name = elements.firstName.value;

            console.log(attendee);

            onAdd(attendee);



            form.reset();
        });

    }
};

export default itemForm;
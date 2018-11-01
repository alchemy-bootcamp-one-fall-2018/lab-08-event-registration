const form = document.getElementById('event-application');





const itemForm = {
    init(onAdd){
        form.addEventListener('submit', function(){
            event.preventDefault();

            //form collection of elements
            const elements = form.elements;

            //data object
            const attendee = {};

            attendee.firstName = elements['first-name'].value;
            attendee.lastName = elements['last-name'].value;
            onAdd(attendee);
        });
    }


};

export default itemForm;
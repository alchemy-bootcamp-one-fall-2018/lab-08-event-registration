const form = document.getElementById('event-application');





const itemForm = {
    init(onAdd){
        form.addEventListener('submit', function(){
            event.preventDefault();

            //form collection of elements
            const elements = form.elements;

            //data object
            const attendee = {};

            //set up the attendee's name and email
            attendee.firstName = elements['first-name'].value;
            attendee.lastName = elements['last-name'].value;
            attendee.email = elements.email.value;

            //set up the attendee's pronoun
            attendee.pronoun = elements.pronoun.value;
            //sets up attendee's shirt options
            attendee.shirtSize = elements['tshirt-size'].value;
            attendee.shirtColor = elements['tshirt-color'].value;
            
            //sets up attendee's guests and meal selections
            attendee.food = elements.meal.value;
            attendee.numGuests = elements.guests.value;

            onAdd(attendee);
        });
    }


};

export default itemForm;
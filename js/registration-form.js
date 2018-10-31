const form = document.getElementById('registration-form');
const femPronoun = document.getElementById('she-her');
const malePronoun = document.getElementById('he-him');
const nongenPronoun = document.getElementById('they-them');


const yesKilled = document.getElementById('yes');
const noKilled = document.getElementById('no');



const itemForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();                        //prevents flashing thing
            const elements = form.elements;

            const attendee = {};

        
            
            attendee.firstName = elements.firstName.value;
            attendee.lastName = elements.lastName.value;          
            attendee.pronoun = elements.pronoun.value;
           



            console.log(attendee);


            onAdd(attendee);



            form.reset();
        });

    }
};

export default itemForm;
const form = document.getElementById('registration-form');
const femPronoun = document.getElementById('she-her');
const malePronoun = document.getElementById('he-him');
const nongenPronoun = document.getElementById('they-them');
const email = document.getElementById('email');
const shirttype = document.getElementById('shirttype');
const shirtsize = document.getElementById('shirtsize');
const shirtcolor = document.getElementById('shirtcolor');
const guests = document.getElementById('guests');
const chicken = document.getElementById('chicken');
const vegetarian = document.getElementById('vegetarian');
const glutenfree = document.getElementById('glutenfree');
const nuts = document.getElementById('nuts');
const other = document.getElementById('other');


const itemForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();                        //prevents flashing thing
            const elements = form.elements;                //form elements collection
            const attendee = {};                           //data object!!!!

        
            
            attendee.firstName = elements.firstName.value;    //gather data
            attendee.lastName = elements.lastName.value;          
            attendee.pronoun = elements.pronoun.value;
            attendee.email = elements.email.value;
            attendee.shirttype = elements.shirttype.value;
            attendee.shirtsize = elements.shirtsize.value;
            attendee.shirtcolor = elements.shirtcolor.value;
            attendee.guests = elements.guests.value;
            attendee.maindish = elements.maindish.value;
            attendee.restrictions = elements.restrictions.value;

            attendee.maindish = [];

            for(let i = 0; i < elements.maindish.length; i++) {
                const maindish = elements.maindish[i];
                if(maindish.checked) {
                    attendee.maindish.push(maindish.value);
                }
            }

            attendee.restrictions = [];
            for(let i = 0; i < elements.restrictions.length; i++) {
                const restrictions = elements.restrictions[i];
                if(restrictions.checked) {
                    attendee.restrictions.push(restrictions.value);
                }
            }
                console.log(attendee.restrictions);
            
           







            console.log(attendee);


            onAdd(attendee);



            form.reset();
        });

    }
};

export default itemForm;
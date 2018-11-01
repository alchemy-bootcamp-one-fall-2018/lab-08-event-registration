const form = document.getElementById('attendee-registration');
const yesGuests = document.getElementById('yes');
const noGuests = document.getElementById('no');

//const howMany = document.getElementById('how-many');
//const shirtSize = document.getElementById();
//const add more

const registrationForm = {
    init(onAdd) {
//console.log('joe');
        yesGuests.addEventListener('change', function() {
            yesGuests = true;
        });

        noGuests.addEventListener('change', function(){
            //noGuests = true;
        });

        howMany
    },
};

form.addEventListener('submit', function(event){
    event.preventDefault();

    const elements = form.elements;
    const partyPeeps = {};
    partyPeeps.name = elements.name.value;
    
    partyPeeps.guest = elements.guest.value === 'yes';
    if(partyPeeps.guest) {
        const count = parseInt(elements.guest.value);
        if(!isNaN(count)) {
            partyPeeps.guest = count;
        }
    }

    onAdd(partyPeeps);

});






export default registrationForm;
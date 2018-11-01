export default registrationForm;
const form = document.getElementById('attendee-registration');
//const yesGuests = document.getElementById('yes');
//const noGuests = document.getElementById('no');
//const smallShirt = document.getElementById
//const howMany = document.getElementById('how-many');
//const shirtSize = document.getElementById();
//const add more

const registrationForm = {
   // init(onAdd) {
//console.log('joe');
};

form.addEventListener('submit', function(event){
    event.preventDefault();

    const elements = form.elements;
    
    const partyPeeps = {};
    
    partyPeeps.name = elements.name.value;
    partyPeeps.guest = elements.guest.value === 'yes';
    partyPeeps.guest = elements.guest.value === 'no';
    partyPeeps.size = 


    partyPeeps.guest = elements.guest.value === 'yes';
    if(partyPeeps.guest) {
        const count = parseInt(elements.guest.value);
        if(!isNaN(count)) {
            partyPeeps.guest = count;
        }
    }

    
});

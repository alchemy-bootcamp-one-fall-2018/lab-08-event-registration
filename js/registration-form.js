//const form = document.getElementById('attendee-registration');
const yesGuests = document.getElementById('yes');
const noGuests = document.getElementById('no');
////const howMany = document.getElementById('how-many');
//const shirtSize = document.getElementById();
//const add more

const registrationForm = {
    init(onAdd) {
console.log('joe')
        yesGuests.addEventListener('change', function() {
            yesGuests = true;
        });

        noGuests.addEventListener('change', function(){
            noGuests = true;
        });
    },
};





export default registrationForm
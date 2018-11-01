const form = document.getElementById('volunteer-registration');
//const name = document.getElementById('name');
//const pronoun = document.getElementById('pronoun');
//const email = document.getElementById('email');
//local const regInstance like demo mafiox but in app/api it's item/items...??
//console.log('ghfsB', form.elements.name.value);

const guestsRange = document.getElementById('num-guests');
const guestsDisplay = document.getElementById('guests-display');
const message = document.getElementById('message');


const regForm = {
    init(onAdd) {
        
        function setGuestsDisplay() {
            guestsDisplay.textContent = guestsRange.value;
        }
        setGuestsDisplay();
        guestsRange.addEventListener('change', setGuestsDisplay);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const regInstance = {};

            regInstance.name = elements.name.value;
            regInstance.pronoun = elements.pronoun.value;
            regInstance.email = elements.email.value;
            regInstance.size = elements.size.value;
            regInstance.style = elements.style.value;
            regInstance.color = elements.color.value;
            regInstance.pronoun = elements.pronoun.value;
            
          
            // calls the callback with new item
            onAdd(regInstance);

            // displays an onscreen message
            message.textContent = 'Thank you!' + elements.name.value + 'We will see you and your party of ' + guestsRange.value + ' on Corn Maze Weekend!';
            form.reset();
        });
    }
};
export default regForm;
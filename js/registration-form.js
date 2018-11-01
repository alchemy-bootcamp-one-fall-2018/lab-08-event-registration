const form = document.getElementById('volunteer-registration');

const guestsRange = document.getElementById('number');
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
            //const guestCount = parseInt(elements.guestsRange);
            regInstance.name = elements.name.value;
            regInstance.pronoun = elements.pronoun.value;
            regInstance.email = elements.email.value;
            regInstance.size = elements.size.value;
            regInstance.style = elements.style.value;
            regInstance.color = elements.color.value;
            regInstance.number = elements.number.value;           
            regInstance.meal = elements.meal.value;           
            
            // calls the callback with new item
            onAdd(regInstance);

            // displays an onscreen message
            message.textContent = 'Thank you, ' + elements.name.value + '! We will see you and your party of ' + elements.number.value + ' on Corn Maze Weekend!';
            form.reset();
        });
    }
};
export default regForm;
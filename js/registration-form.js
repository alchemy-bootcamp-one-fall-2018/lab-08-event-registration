const eventForm = document.getElementById('event-form');
const formResponse = document.getElementById('submit-message-response');


// const nameInput = document.getElementById('name');

// const removeResponseAfterSubmit = {
//    nameInput.addEventListener('keyup', function(event) {
//      function refreshPage(){
//         window.location.reload();
//     }
// }
// }



const eventFormItems = {
    init(onAdd) {
        eventForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // collect the form events
            const elements = eventForm.elements;
            // console.log(elements); // SPIT OUT SUBMITTED FORM ELEMENT IDS TO CONSOLE

            // data object
            const userData = {};

            // gather data
            userData.name = elements.name.value;
            userData.email = elements.email.value;
            userData.pronoun = elements.pronoun.value;
            userData.guests = elements.guests.value;
            userData.meal = elements.meal.value;
            userData.shirt = elements.shirt.value;

            // call the callback function
            onAdd(userData);

            // onscreen message
            formResponse.textContent = 'Thank you for signing up! We will be in touch as soon as possible.';

            eventForm.reset();

            // after form submit, clear formResponse after 1000ms/display alert/reload page
            setTimeout(function() {
                clearMessage();
                alert('Thanks for signing up!');
                window.location.reload();
            }, 1000);

        });

        // clear formResponse after submit and click into input
        function clearMessage() {
            formResponse.textContent = '';
        }
        eventForm.addEventListener('change', clearMessage);
        eventForm.addEventListener('keydown', clearMessage);

    }
};

export default eventFormItems;
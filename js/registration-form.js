const formDetails = document.getElementById('event-registration');
const systemresponse = document.getElementById('systemresponse');

const eventFormDetails = {
    init(onAdd) {
        formDetails.addEventListener('submit', function(event) {
            event.preventDefault();

            //get the details
            const elements = formDetails.elements;
            //console.log(elements); getting unassociated errors, but also getting elements

            //create and empty object to dump user input and pass to local storage/api
            const userInput = {};

            //throw in user input into data object
            userInput.name = elements.name.value;
            // userInput.pronoun = elements.pronoun.value;
            userInput.phone = elements.phone.value;
            userInput.email = elements.email.value;
            userInput.size = elements.size.value;
            userInput.color = elements.color.value;
            userInput.diet = elements.diet.value;
       

            //setup callback function callback
            onAdd(userInput);

            //system response
            systemresponse.textContent = 'You are all set! See you there!';

            formDetails.reset();


        });
    }
};

export default eventFormDetails;
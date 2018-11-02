const formDetails = document.getElementById('event-registration');
const systemresponse = document.getElementById('systemresponse');

const eventFormDetails = {
    init(onAdd) {
        formDetails.addEventListener('submit', function(event) {
            event.preventDefault();

            //get the details
            const elements = formDetails.elements;
            console.log(elements);

        }
    }
}


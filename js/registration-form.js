
const form = document.getElementById('event-registration');

const message = document.getElementById('message');

const registrationForm = {
    init(onAdd) {
        
        

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // form elements collection
            const elements = form.elements;

            // data object
            const registration = {};
            
            // gather data, ie:
            registration.firstName = elements['first-name'].value;

            

            // call the callback with new item
            onAdd(registration);

            // use an onscreen message
            message.textContent = 'Thanks for your interest! We look forward to killing with you!';
            
            form.reset();

        });

    }
};

export default registrationForm;
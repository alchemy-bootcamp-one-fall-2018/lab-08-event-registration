
const form = document.getElementById('event-application');
const pronoun = document.getElementById('she');


const registrationForm = {
    init(onAdd) {

        pronoun.addEventListener('change', function() {
            pronoun.required = true;
        });        
        
    
        
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            onAdd(attendee);
            const elements = form.elements;
            const attendee = {};
            attendee.name = elements.name.value;
            
        });
 
    }   
};


export default registrationForm;
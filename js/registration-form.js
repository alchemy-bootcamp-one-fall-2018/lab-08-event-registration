const form = document.getElementById('form-registration');
const emailForm = document.getElementById('email');
const phoneForm = document.getElementById('phone'); 
const mediaForm = document.getElementById('social-media'); 

const itemForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements; 

            const attendee = {}; 
            
            attendee.name = elements.name.value; 
            console.log('here', attendee.name); 

            attendee.pronoun = elements.pronoun.value;

            console.log("hello", attendee.pronoun); 
           
            
            onAdd(attendee); 
            
            form.reset(); 
        }); 


    } 
}; 

export default itemForm;
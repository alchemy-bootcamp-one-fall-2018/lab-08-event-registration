const form = document.getElementById('form-registration');
const message = document.getElementById('message');
const media = document.getElementById('social-media');

const itemForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements; 

            const attendee = {}; 
            
            attendee.name = elements.name.value; 

            attendee.pronoun = elements.pronoun.value; 

            attendee.dogs = elements.dogs.value; 

            attendee.email = elements.email.value;

            attendee.phone = elements.phone.value; 

            attendee.toy = elements.toy.value; 

            attendee.treat = elements.treat.value; 

            attendee.shirt = elements.shirt.value; 

            attendee.media = media.value;
            
            onAdd(attendee); 

            message.textContent = 'Thanks for your interest! We cannot wait to meet your dog!';
            
        }); 
        
    } 
}; 
form.reset(); 

export default itemForm;
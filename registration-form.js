const form = document.getElementById('event-form');

const elements = form.elements;




const registrationForm = {

    init() {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const finalForm = {};
            finalForm.name = elements.name.value;
            return finalForm;
            


        });






    }

};

export default registrationForm;
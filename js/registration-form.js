const form = document.getElementById('event-registration');

const registrationForm = {
    init() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            //console.log(form.elements);
        });
    }
};
export default registrationForm;

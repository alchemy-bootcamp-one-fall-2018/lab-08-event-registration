const form = document.getElementById('event-registration');

const registrationForm = {
    init() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const info = {
                info.name = elements.name.value;
            }
            // console.log(form.elements);
        });
    }
};
export default registrationForm;

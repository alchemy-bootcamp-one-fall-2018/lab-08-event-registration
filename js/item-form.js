const form = document.getElementById('coding-creatures');
const message = document.getElementById('message');

const codingCreaturesForm = {
    init() {
        form.addEventListener('submission', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const creature = {};

            creature.name = elements.name.value;
            creature.work = elements.name.value;
            creature.attending = elements.name.value;
            creature.meal = elements.name.value;
            creature.size = elements.name.value;
            creature.color = elements.name.value;
        

    
            message.textContent = 'We look forward to killing code with you!';
            
            form.reset();

        });

    }
};

export default codingCreaturesForm;

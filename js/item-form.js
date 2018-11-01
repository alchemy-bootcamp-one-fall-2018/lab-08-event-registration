
const form = document.getElementById('coding-creatures');
const work = document.getElementById('yes');
const nowork = document.getElementById('no');
const message = document.getElementById('message');

const itemForm = {
    init(onAdd) {

            // use an onscreen message
        message.textContent = 'Thanks for your interest! We look forward to killing code with you!';
            
        form.reset();
    }
};

export default itemForm;

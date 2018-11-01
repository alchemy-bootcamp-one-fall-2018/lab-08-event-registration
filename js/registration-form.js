
const mainRace = document.getElementById('main-race');
const message = document.getElementById('message');

const itemForm = {
    init(onAdd) {

        const form = document.getElementById('wow-application');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const newPlayer = {};

            newPlayer.name = elements.name.value;
                
            onAdd(newPlayer);



            message.textContent = 'Thank you ' + elements.name.value + ' the ' + mainRace.value + 'for your allegiance!  You shall hear back soon.';
        });

    }
};

export default itemForm;
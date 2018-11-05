const mainClass = document.getElementById('main-class');
const message = document.getElementById('message');

const itemForm = {
    init(onAdd) {
        
        const form = document.getElementById('wow-application');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            
            const newPlayer = {};
            newPlayer.name = elements.name.value;
            newPlayer.age = elements.age.value;
            newPlayer.faction = elements.HAButton.value;
            newPlayer.level = elements.level.value;
            newPlayer.mainRace = elements['main-race'].value;
            newPlayer.mainClass = elements['main-class'].value;
            
            onAdd(newPlayer);

            message.textContent = 'Thank you ' + elements.name.value + ' the ' + mainClass.value + ' for your allegiance!  You shall hear back soon from your Warchief or King.';

            form.reset();
        });

    }
};

export default itemForm;
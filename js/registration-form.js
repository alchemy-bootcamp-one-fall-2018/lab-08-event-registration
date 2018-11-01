const form = document.getElementById('mission-control');
// const guestInfo = document.getElementById('mission-control');
const addGuest = document.getelementByID(mission-control');
// const shirt
// const MRE



const registrationForm = {
    Init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const addGuest = {
                name: elements.name.value,
                date: elements.date.value,
            };

             onAdd(addGuest);

            form.reset();
            document.activeElement.getBoundingClientRect(); 
        });
    }
};

// addGuest {
//     add(addGuest) {
//         const dom = addAddGuest(addGuest); {}



        const addGuest = document.getElementById('add-guest')?
        form.addEventListener('submit', function(onAdd) {
            onAdd.preventDefault();

        onAdd(addGuest);
        Message.textContent = 'Permission to board'

        form.reset();
        document.activeElement.blur();
        }
    );

export default addGuest;

const form = document.getElementById('space-application');
const message = document.getElementById('end-message');

const registrationForm = {
    init(onAdd) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const guest = {};

            guest.name = elements['name'].value;
            guest.pronoun = elements['pronoun'].value;
            guest.email = elements['email'].value;
            guest.spaceshipType = elements['spaceshipType'].value;
            guest.groupSize = elements['groupSize'].value;
            guest.breakfast = elements['breakfast'].value;
            guest.lunch = elements['lunch'].value;
            guest.dinner = elements['dinner'].value;
            guest.shirtSize = elements['shirtSize'].value;
          

            onAdd(guest);

            message.textContent = 'Thanks for registering!';

            form.reset();

        });

    }
};

export default registrationForm;





//how to do it this way:
// const name = document.getElementById('name');
// const pronoun = document.getElementById('pronoun');
// const email = document.getElementById('email');
// const spaceshipType = document.getElementsByName('spaceshipType');
// const groupSize = document.getElementById('groupSize').value;
// const breakfast = document.getElementById('breakfast').value;
// const lunch = document.getElementById('lunch').value;
// const dinner = document.getElementById('dinner').value;
// const shirtSize = document.getElementById('shirtSize').value;


    






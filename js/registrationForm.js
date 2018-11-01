// gets input from the form

const formInput = document.getElementById('seminarForm');

console.log(formInput);
// creating function that listens to event

const formData = {

    init(onAdd) {

//listens for submit button on input form

        formInput.addEventListener('submit', function(event) {
            event.preventDefault();

            // breaksdown form into its individual elements that have an input that can be targeted

            const elements = formInput.elements;

            // creates an array of personal info based on inputs

            const personInfo = {};

            //add the name and value of the name input box to the above array (personal Info)

            personInfo.name = elements.name.value;

            // add the pronoun value to our array 
            // all grouped radio buttons must have the same name!

            personInfo.proNoun = elements.pronoun.value;

            // creates an array that will be used into our OTHER Array with preference values

            personInfo.preference = [];
            //For loop that iterates through all the preferences option

            for(var i = 0; i < elements.preference.length; i++){

                // creates new variable to be pushed to our newly created array
                const checkPref = elements.preference[i];

                // checks if the box is checked, push our NEWLY created array as a VALUE to our main Array
                
                if(checkPref.checked === true){
                    personInfo.preference.push(checkPref.value);
                }
            }
            // creates the following KEYS within out Array and adds them to the array with their respective value 
            // Array.KEY === elementfromForm.NameofElement.Value of the element.

            personInfo.robbed = elements.wasRobbed.value;
            personInfo.explain = elements.explain.value;
            personInfo.email = elements.email.value;
            personInfo.numGuests = elements.guestNumber.value;
            personInfo.diet = elements.diet.value;
            personInfo.shirt = elements.shirtSize.value;
            personInfo.shirtColor = elements.shirtColor.value;


            console.log(personInfo);
            // Sets up the callback function with the information form the data to the APP file and eventually back to the API for storage.
            onAdd(personInfo);

            formInput.reset();
        });
        

    }
};

export default formData;
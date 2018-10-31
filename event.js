
// keeps the page from refreshing after submitting the 'submit button' 
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const elements = form.elements; 

// checking to see if the elements are getting pulled up on the console log after hitting subit
    console.log(elements);


// adds the item on the list 
    onAdd("value"); 

}); 
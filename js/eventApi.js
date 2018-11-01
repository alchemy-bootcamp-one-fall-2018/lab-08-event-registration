


// creates an array for data to be push

let dataArray = [];

//create an object aka a variable with a function which becomes the object. saveData is the object that is placing the collected data into local storage
function saveData() {
    localStorage.setItem('data', JSON.stringify(dataArray));

}

// creates on object that pushes new data into out dataArray
const dataApi = {
    add(data) {
        dataArray.push(data);

        saveData();        
    }
};

export default dataApi;

import getInfo from './registration-form.js';

// const returnInfo = {

//     init() {
//         return getInfo.info;
//     }
// };

// export default returnInfo;

let attendees = [readStorage()];

console.log('initial attendees', attendees);

readStorage();

function saveInfo() {
    localStorage.setItem('attendees', JSON.stringify(attendees));

    console.log('after storing', JSON.parse(localStorage.getItem('attendees')));
}

function readStorage() {
    JSON.parse(localStorage.getItem('attendees'));
}

const infoApi = {
    getStoredInfo() {
        readStorage();
    },

    add(item) {
        if(attendees) {
            console.log('if in');
            attendees.push(item);
        } else {
            console.log('not in');
            attendees = item;
        }
        saveInfo();
    }

};

export default infoApi;
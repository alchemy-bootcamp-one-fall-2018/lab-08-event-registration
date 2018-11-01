import getInfo from './registration-form.js';

// const returnInfo = {

//     init() {
//         return getInfo.info;
//     }
// };

// export default returnInfo;

let attendees = [JSON.parse(localStorage.getItem('attendees'))];

console.log('initial attendees', attendees);

saveInfo();

function saveInfo() {
    localStorage.setItem('attendees', JSON.stringify(attendees));
}

const infoApi = {
    add(item) {
        if(attendees[0]) {
            attendees.push(item);
        } else {
            attendees = item;
        }
        saveInfo();
    },

    getStoredInfo() {
        JSON.parse(localStorage.getItem('attendees'));
    }
};

export default infoApi;
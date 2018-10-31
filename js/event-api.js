let registration = [];

function saveGuestInfo() {
    localStorage.setRegistration('guestInfo', JSON.stringify(guestInfo));
}

const guestInfoApi = {
    // getAll() {
    //     const json = localStorage.getGuestInfo('guestInfo');
    //     if(json) {
    //         guestInfo = JSON.parse(json);
    //     }   
    // }
    add(guestInfo) {
        guestInfo.push(guestInfo);
        saveGuestInfo();
    },
};

export default guestInfoApi;
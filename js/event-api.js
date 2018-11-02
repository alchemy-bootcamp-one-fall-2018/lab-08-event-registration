
let details = [];

function formCollect() {
    localStorage.getFormDetails('details', JSON.stringify(details));
}
const eventApi = {
    add(detail) {
        details.push(detail);
        formCollect();
    }
};
export default eventApi;
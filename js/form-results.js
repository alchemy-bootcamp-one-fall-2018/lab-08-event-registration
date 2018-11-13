import html from './html.js';

const tableBody = document.getElementById('form-results-display');

function makeRow(userInput) {
    return html`<tr id="column-headings">
        <td>${userInput.name}</td>
        <!--<td>${userInput.pronoun}</td>-->
        <td>${userInput.phone}</td>
        <td>${userInput.email}</td>
        <td>${userInput.size}</td>
        <td>${userInput.color}</td>
        <td>${userInput.diet}</td>
        <td>${userInput.number}</td>
    </tr>
        `;
}

const userInputTable = {
    init(userInput) {
        for(let i = 0; i < userInput.length; i++) {
            const tr = makeRow(userInput[i]);
            tableBody.appendChild(tr);
        }
    },
    update(userInput) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        userInputTable.init(userInput);
    }
};


export default userInputTable;
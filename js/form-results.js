import html from './html.js';

const tableBody = document.getElementById('form-submission-table');

function makeRow(userInput) {
    return html`
        <td>${userInput.name}</td>
        <td>${userInput.pronoun}</td>
        <td>${userInput.phone}</td>
        <td>${userInput.email}</td>
        <td>${userInput.size}</td>
        <td>${userInput.color}</td>
        <td>${userInput.diet}</td>
        <td>${userInput.number}</td>
        </tr>`;
}


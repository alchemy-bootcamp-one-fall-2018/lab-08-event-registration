

function makeEvent(event) {
    const html = /*html*/`
        <li class="event">
            <h3 class="eventList">
                ${event.firstName}
                ${event.lastName}
            </h3>
            <h4>
                ${event.talks.join(', ')}
            </h4>
        </li>
    `;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('events');

const eventList = {
    init(events) {
        for(let i = 0; i < events.length; i++) {
            eventList.add(events[i]);
        }
    },
    add(event) {
        const dom = makeEvent(event);

        list.appendChild(dom);
    }
};

export default eventList;
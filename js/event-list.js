

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

    const template = document.createElement('template');

    template.innerHTML = html;

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
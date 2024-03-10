


function home() {
    const content = document.querySelector("#content");
    const contentHead = document.createElement('div');
    const contentBody = document.createElement('div');
    const headH1 = document.createElement('h1');
    const bodyTitle = document.createElement('p');
    const bodySchedule = document.createElement('h2');
    const days = document.createElement('div');

    headH1.textContent = 'Welcome to this restaurant!';
    bodyTitle.textContent = 'We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!';
    bodySchedule.textContent = 'Schedule';
    days.innerHTML = 
    `<p>Mon 9am-10pm</p>
    <p>Thu 9am-10pm</p>
    <p>Wed 9am-10pm</p>
    <p>Tur 9am-10pm</p>
    <p>Fri 9am-10pm</p>
    <p>Sat 9am-10pm</p>
    <p>Sun 10am-3pm</p>`;

    contentHead.appendChild(headH1);
    contentBody.appendChild(bodyTitle);
    contentBody.appendChild(bodySchedule);
    contentBody.appendChild(days);

    
    content.appendChild(contentHead);
    content.appendChild(contentBody);

    console.log("hello!");
}


home()






































function home() {
    const content = document.querySelector("#content");
    const contentHead = document.createElement('div');
    const contentBody = document.createElement('div');
    const headH1 = document.createElement('h1');
    const bodyTitle = document.createElement('p');

    headH1.textContent = 'Welcome to this restaurant!';
    bodyTitle.textContent = 'We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!';

    contentHead.appendChild(headH1);
    contentBody.appendChild(bodyTitle);
    
    content.appendChild(contentHead);
    content.appendChild(contentBody);

    console.log("hello!");
}


home()



































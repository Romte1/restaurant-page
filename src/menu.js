const createMenuPage = () => {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const beverages = document.createElement('h2');

    title.textContent = 'Menu';
    beverages.textContent = 'Beverages'

    content.appendChild(title);
    content.appendChild(beverages);


}
export default createMenuPage;
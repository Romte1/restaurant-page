import pageLoad from './pageLoad';
import pageContentReset from './pageContentReset';
import createContactPage from './contact';
import createMenuPage from './menu';

const addButtonFunctions = () => {
    const home  = document.querySelector('.home');
    const menu  = document.querySelector('.menu');
    const about  = document.querySelector('.about');

    home.addEventListener('click', () => {
        pageContentReset();
        pageLoad();

    })

    menu.addEventListener('click', () => {
        pageContentReset();
        createMenuPage();
        

    })

    about.addEventListener('click', () => {
        pageContentReset();
        createContactPage();

    })

}

export default addButtonFunctions;
import pageLoad from './pageLoad';
import pageContentReset from './pageContentReset';

const addButtonFunctions = () => {
    const home  = document.querySelector('.home');
    const menu  = document.querySelector('.menu');
    const about  = document.querySelector('.about');

    home.addEventListener('click', () => {
        pageContentReset();
        pageLoad();

    })

}

export default addButtonFunctions;
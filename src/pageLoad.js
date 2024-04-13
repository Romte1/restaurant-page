import createPage from './restaurant';
import addButtonFunctions from './tabs';


function initialPage() {
    createPage();
    addButtonFunctions();

}

function homePage(){
    createPage();
}











export default {initialPage, homePage};
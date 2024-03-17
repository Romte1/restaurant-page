const createContactPage = () => {
    const content = document.querySelector('#content');
    const contactUs = document.createElement('h2');
    const address = document.createElement('h2');
    const phone = document.createElement('h2');
    const email = document.createElement('h2');
    const operationHours = document.createElement('h2');
    const reservations = document.createElement('h2');
    const generalInquiries = document.createElement('h2');

    contactUs.textContent = 'Contact Us';

    content.appendChild(contactUs);



    
}
export default createContactPage;
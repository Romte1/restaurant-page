const createContactPage = () => {
    const content = document.querySelector('#content');
    const contactUs = document.createElement('h1');
    const phone = document.createElement('h2');
    const email = document.createElement('h2');
    const reservations = document.createElement('h2');
    const generalInquiries = document.createElement('h2');
    const pContactUs = document.createElement('p');
    const pPhone = document.createElement('p');

    contactUs.textContent = 'Contact Us';
    pContactUs.textContent = "Thank you for your interest in this restaurant!. We're thrilled to hear from you!";
    phone.textContent = 'Phone:';
    pPhone.textContent = '(555) 123-4567';


    content.appendChild(contactUs);
    content.appendChild(pContactUs);
    content.appendChild(phone);
    content.appendChild(pPhone);



    
}
export default createContactPage;
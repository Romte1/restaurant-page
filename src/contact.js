const createContactPage = () => {
    const content = document.querySelector('#content');
    const contactUs = document.createElement('h1');
    const phone = document.createElement('h2');
    const email = document.createElement('h2');
    const reservations = document.createElement('h2');
    const generalInquiries = document.createElement('h2');
    const pContactUs = document.createElement('p');
    const pPhone = document.createElement('p');
    const pEmail = document.createElement('p');
    const pReservations = document.createElement('p');
    const pGeneralInquiries = document.createElement('p');

    contactUs.textContent = 'Contact Us';
    pContactUs.textContent = "Thank you for your interest in this restaurant!. We're thrilled to hear from you!";

    phone.textContent = 'Phone:';
    pPhone.textContent = '(555) 123-4567';

    email.textContent = 'Email:';
    pEmail.textContent = 'info@thisrestaurant.com';

    reservations.textContent = 'Reservation:';
    pReservations.textContent ='For reservations, please call us during business hours or use our online reservation system.';

    generalInquiries.textContent = 'General Inquiries:';
    pGeneralInquiries.textContent = "For general inquiries, feedback, or special requests, please fill out the form below, and we'll get back to you as soon as possible.";




    content.appendChild(contactUs);
    content.appendChild(pContactUs);
    content.appendChild(phone);
    content.appendChild(pPhone);
    content.appendChild(email);
    content.appendChild(pEmail);
    content.appendChild(reservations);
    content.appendChild(pReservations);
    content.appendChild(generalInquiries);
    content.appendChild(pGeneralInquiries);




    
}
export default createContactPage;
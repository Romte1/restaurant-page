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
    const contactForm = document.createElement('form');
    const lblName = document.createElement('label');
    const iptName = document.createElement('input');
    const lblEmail = document.createElement('label');
    const iptEmail = document.createElement('input');
    const lblPhone = document.createElement('label');
    const iptPhone = document.createElement('input');
    const textAreaAddInfo = document.createElement('textarea');
    const submitButton = document.createElement('button');
    const divName = document.createElement('div');
    const divEmail = document.createElement('div');
    const divPhone = document.createElement('div');

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

    lblName.textContent = 'Name:';
    lblName.setAttribute('for', 'name');
    iptName.setAttribute('id', 'name');

    lblEmail.textContent = 'Email:';
    lblEmail.setAttribute('for', 'email');
    iptEmail.setAttribute('id', 'email');

    lblPhone.textContent = 'Phone:';
    lblPhone.setAttribute('for', 'phone');
    iptPhone.setAttribute('id', 'phone');

    textAreaAddInfo.setAttribute('placeholder', 'Place here anything you wanna tell us!');

    submitButton.textContent = 'Submit!';

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault()
        iptName.value='';
        iptEmail.value = '';
        iptPhone.value = '';
        textAreaAddInfo.value = '';
        alert('Thanks for sending us this message, we appreciate your interest and will take it into account')
    })



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

    divName.appendChild(lblName);
    divName.appendChild(iptName);
    divEmail.appendChild(lblEmail);
    divEmail.appendChild(iptEmail);
    divPhone.appendChild(lblPhone);
    divPhone.appendChild(iptPhone);

    contactForm.appendChild(divName);
    contactForm.appendChild(divEmail);
    contactForm.appendChild(divPhone);
    contactForm.appendChild(textAreaAddInfo);
    contactForm.appendChild(submitButton);

    content.appendChild(contactForm);




    
}
export default createContactPage;
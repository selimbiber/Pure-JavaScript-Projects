function createContactSubsection() {
    const CONTACT_SUBSECTION = document.createElement('section');
    CONTACT_SUBSECTION.setAttribute('id', 'contact-subsection');
    CONTACT_SUBSECTION.className = 'contact-subsection';

        const CONTACT_SUBSECTION_HEADING = document.createElement('h2');
            CONTACT_SUBSECTION_HEADING.className = 'contact-subsection_heading';
            CONTACT_SUBSECTION_HEADING.textContent = 'Contact us and reserve a place for the historical taste!';
        CONTACT_SUBSECTION.appendChild(CONTACT_SUBSECTION_HEADING);

        const CONTACT_SUBSECTION_IMAGE = document.createElement('img');
            CONTACT_SUBSECTION_IMAGE.className = 'contact-subsection_image';
            CONTACT_SUBSECTION_IMAGE.src = '../dist/images/ottoman-restaurant-1.jpg';
            CONTACT_SUBSECTION_IMAGE.alt = 'The Ottoman Restaurant Image';
        CONTACT_SUBSECTION.appendChild(CONTACT_SUBSECTION_IMAGE);

        const PHONE_NUMBER = document.createElement('p');
            PHONE_NUMBER.className = 'contact-subsection_phone-number'
            PHONE_NUMBER.textContent = 'Tel: +90 0553 353 1453';
        CONTACT_SUBSECTION.appendChild(PHONE_NUMBER);

        const RESTAURANT_LOCATION_TEXT = document.createElement('p');
            RESTAURANT_LOCATION_TEXT.className = 'contact-subsection_location-text';
            RESTAURANT_LOCATION_TEXT.textContent = 'Adres: Tersane Cad./zeybek Sk 25/B / Beyoğlu / İstanbul / Türkiye';
        CONTACT_SUBSECTION.appendChild(RESTAURANT_LOCATION_TEXT);

        const RESTAURANT_LOCATION_IMAGE = document.createElement('img');
            RESTAURANT_LOCATION_IMAGE.className = 'contact-subsection_location-image';
            RESTAURANT_LOCATION_IMAGE.src = '../dist/images/map.jpeg';
        CONTACT_SUBSECTION.appendChild(RESTAURANT_LOCATION_IMAGE);

    return CONTACT_SUBSECTION;
}

function loadContactSubsection() {
    const MAIN_SECTION = document.querySelector('.main-section');
    MAIN_SECTION.appendChild( createContactSubsection() );
}

export default loadContactSubsection;
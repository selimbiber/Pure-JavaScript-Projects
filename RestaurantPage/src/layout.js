import loadFigureSubsection from './figure.js';
import loadAboutSubsection from './about.js';
import loadMenuSubsection from './menu.js';
import loadContactSubsection from './contact.js';

function createHeaderSection() {
    const HEADER_SECTION = document.createElement('header');
    HEADER_SECTION.className = 'header-section';

        const HEADING_NAME = document.createElement('h1');
            HEADING_NAME.className = 'heading-name';
            HEADING_NAME.textContent = 'The Ottoman Restaurant';
        HEADER_SECTION.appendChild(HEADING_NAME);

        const HEADER_NAV = document.createElement('nav');
            HEADER_NAV.className = 'header-section_nav-subsection';
        HEADER_SECTION.appendChild(HEADER_NAV);

            const ABOUT_LINK = document.createElement('a');
                ABOUT_LINK.textContent = 'ABOUT';
                ABOUT_LINK.className = 'nav-link';
                ABOUT_LINK.href = '#about-subsection';
            HEADER_NAV.appendChild(ABOUT_LINK);

            const MENU_LINK = document.createElement('a');
                MENU_LINK.textContent = 'MENU';
                MENU_LINK.className = 'nav-link';
                MENU_LINK.href = '#menu-subsection';
            HEADER_NAV.appendChild(MENU_LINK);

            const CONTACT_LINK = document.createElement('a');
                CONTACT_LINK.textContent = 'CONTACT';
                CONTACT_LINK.className = 'nav-link';
                CONTACT_LINK.href = '#contact-subsection';
            HEADER_NAV.appendChild(CONTACT_LINK);

    return HEADER_SECTION;
}

function createMainSection() {
    const MAIN_SECTION = document.createElement('main');
    MAIN_SECTION.className = 'main-section'; 
    document.addEventListener('DOMContentLoaded', () => {
        loadFigureSubsection();
        loadAboutSubsection();
        loadMenuSubsection();
        loadContactSubsection();
    });
    return MAIN_SECTION;
}

function createFooterSection() {
    const FOOTER_SECTION = document.createElement('footer');
    FOOTER_SECTION.className = 'footer-section';

        const ODIN_PROJECT_LINK = document.createElement('a');
            ODIN_PROJECT_LINK.textContent = 'The Odin Project';
            ODIN_PROJECT_LINK.href = 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page/';
            ODIN_PROJECT_LINK.target = '_blank';
        FOOTER_SECTION.appendChild(ODIN_PROJECT_LINK);

        const GITHUB_REPO_LINK = document.createElement('a');
            GITHUB_REPO_LINK.href = 'https://htmlpreview.github.io/?https://github.com/selimbiber/Pure-JavaScript-Projects/blob/main/OttomanRestaurantPage/index.html';
            GITHUB_REPO_LINK.target = '_blank';
        FOOTER_SECTION.appendChild(GITHUB_REPO_LINK);

            const GITHUB_LOGO_IMAGE = document.createElement('img');
                GITHUB_LOGO_IMAGE.src = '../dist/images/github-icon.svg';
            GITHUB_REPO_LINK.appendChild(GITHUB_LOGO_IMAGE);

        const GITHUB_PROFILE_LINK = document.createElement('a');
            GITHUB_PROFILE_LINK.href = 'https://www.github.com/selimbiber/';
            GITHUB_PROFILE_LINK.target = '_blank';
            GITHUB_PROFILE_LINK.textContent = 'Selim Biber';
        FOOTER_SECTION.appendChild(GITHUB_PROFILE_LINK);
        
    return FOOTER_SECTION;
}

function initializeRestrauntPageLayout() {
    const PAGE_CONTAINER = document.getElementById('page-container');

    PAGE_CONTAINER.appendChild( createHeaderSection() );
    PAGE_CONTAINER.appendChild( createMainSection() );
    PAGE_CONTAINER.appendChild( createFooterSection() );
}

export default initializeRestrauntPageLayout;
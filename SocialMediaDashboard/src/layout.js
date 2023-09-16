import loadSubsectionsToMainSection from './cards';
import toggleThemeMode from './theme';

function createHeaderSection() {
    const HEADER_SECTION = document.createElement('header');
    HEADER_SECTION.className = 'header-section'

    const TITLE_SUBSECTION = document.createElement('section');
    TITLE_SUBSECTION.className = 'title-subsection';

        const TOP_HEADING = document.createElement('h1');
            TOP_HEADING.className = 'top-heading';
            TOP_HEADING.textContent = 'Social Media Dashboard';
        TITLE_SUBSECTION.appendChild(TOP_HEADING);
        const TOTAL_FOLLOWERS = document.createElement('p');
            TOTAL_FOLLOWERS.className = 'total-followers';
            TOTAL_FOLLOWERS.textContent = 'Total Followers: 23,004';
        TITLE_SUBSECTION.appendChild(TOTAL_FOLLOWERS);

    HEADER_SECTION.appendChild(TITLE_SUBSECTION);

    const THEME_SUBSECTION = document.createElement('section');
    THEME_SUBSECTION.className = 'theme-subsection';

        const THEME_MODE_TEXT = document.createElement('p');
            THEME_MODE_TEXT.className = 'theme-mode-text';
            THEME_MODE_TEXT.textContent = 'Dark Mode';
        THEME_SUBSECTION.appendChild(THEME_MODE_TEXT);

        const TOGGLE_THEME_BTN_CONTAINER = document.createElement('label');
            TOGGLE_THEME_BTN_CONTAINER.htmlFor = 'toggle-theme_checkbox-btn';
            TOGGLE_THEME_BTN_CONTAINER.className = 'toggle-theme_btn-container';
        THEME_SUBSECTION.appendChild(TOGGLE_THEME_BTN_CONTAINER);

        document.addEventListener('DOMContentLoaded', toggleThemeMode);

        const TOGGLE_THEME_CHECKBOX_BTN = document.createElement('input');
            TOGGLE_THEME_CHECKBOX_BTN.type = 'checkbox';
            TOGGLE_THEME_CHECKBOX_BTN.name = 'toggle-theme_checkbox-btn';
            TOGGLE_THEME_CHECKBOX_BTN.id = 'toggle-theme_checkbox-btn';
        TOGGLE_THEME_BTN_CONTAINER.appendChild(TOGGLE_THEME_CHECKBOX_BTN);

        const TOGGLE_THEME_BTN_SLIDER = document.createElement('div');
            TOGGLE_THEME_BTN_SLIDER.classList.add('toggle-theme_slider', 'slider-round');
        TOGGLE_THEME_BTN_CONTAINER.appendChild(TOGGLE_THEME_BTN_SLIDER);
    
    HEADER_SECTION.appendChild(THEME_SUBSECTION);
    
    return HEADER_SECTION;
}

function createMainSection() {
    const MAIN_SECTION = document.createElement('main');
    MAIN_SECTION.className = 'main-section';

    document.addEventListener('DOMContentLoaded', loadSubsectionsToMainSection);

    return MAIN_SECTION;
}

function createFooterSection() {
    const FOOTER_SECTION = document.createElement('footer');
    FOOTER_SECTION.className = 'footer-section';

        const FRONTEND_MENTOR_LINK = document.createElement('a');
            FRONTEND_MENTOR_LINK.textContent = 'Frontend Mentor';
            FRONTEND_MENTOR_LINK.href = 'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H/';
            FRONTEND_MENTOR_LINK.target = '_blank';
        FOOTER_SECTION.appendChild(FRONTEND_MENTOR_LINK);

        const GITHUB_REPO_LINK = document.createElement('a');
            GITHUB_REPO_LINK.href = 'https://github.com/selimbiber/Pure-JavaScript-Projects/blob/main/SocialMediaDashboard/dist/index.html';
            GITHUB_REPO_LINK.target = '_blank';
        FOOTER_SECTION.appendChild(GITHUB_REPO_LINK);

            const GITHUB_LOGO_ICON = document.createElement('i');
                GITHUB_LOGO_ICON.classList.add('fab', 'fa-github');
            GITHUB_REPO_LINK.appendChild(GITHUB_LOGO_ICON);

        const GITHUB_PROFILE_LINK = document.createElement('a');
            GITHUB_PROFILE_LINK.href = 'https://www.github.com/selimbiber/';
            GITHUB_PROFILE_LINK.target = '_blank';
            GITHUB_PROFILE_LINK.textContent = 'Selim Biber';
        FOOTER_SECTION.appendChild(GITHUB_PROFILE_LINK);
        
    return FOOTER_SECTION;
}

function initializePageLayout() {
    const PAGE_CONTAINER = document.getElementById('page-container');

    PAGE_CONTAINER.appendChild( createHeaderSection() );
    PAGE_CONTAINER.appendChild( createMainSection() );
    PAGE_CONTAINER.appendChild( createFooterSection() );
}

export default initializePageLayout;
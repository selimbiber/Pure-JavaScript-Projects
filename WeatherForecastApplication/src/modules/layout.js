function createHeaderSection() {
    const HEADER_SECTION = document.createElement('header');
    HEADER_SECTION.className = 'header-section';

        const PAGE_LOGO = document.createElement('figure');
            const PAGE_LOGO_IMG = document.createElement('img');
                PAGE_LOGO_IMG.src = '../dist/images/weather-favicon.png';
            PAGE_LOGO.appendChild(PAGE_LOGO_IMG);
        HEADER_SECTION.appendChild(PAGE_LOGO);

        const TOP_HEADING = document.createElement('h1');
            TOP_HEADING.className = 'top-heading';
            TOP_HEADING.textContent = 'Weather Forecast Application';
        HEADER_SECTION.appendChild(TOP_HEADING);

    return HEADER_SECTION;
}

function createMainSection() {
    const MAIN_SECTION = document.createElement('main');
    MAIN_SECTION.className = 'main-section';

        const CITY_SEARCHING_FORM = document.createElement('form');
            CITY_SEARCHING_FORM.id = 'city-searching-form';
            CITY_SEARCHING_FORM.className = 'city-searching-form';
            CITY_SEARCHING_FORM.addEventListener('submit', (f) => f.preventDefault());

                const CITY_SEARCHING_FORM_FIELDSET = document.createElement('fieldset');

                    const FORM_FIELDSET_LEGEND_TEXT = document.createElement('legend');
                        FORM_FIELDSET_LEGEND_TEXT.textContent = 'Enter City Name';
                    CITY_SEARCHING_FORM_FIELDSET.appendChild(FORM_FIELDSET_LEGEND_TEXT);

                    const FORM_FIELDSET_TEXT_INPUT = document.createElement('input');
                        FORM_FIELDSET_TEXT_INPUT.type = 'text';
                        FORM_FIELDSET_TEXT_INPUT.id = 'text-input';
                        FORM_FIELDSET_TEXT_INPUT.className = 'text-input';
                    CITY_SEARCHING_FORM_FIELDSET.appendChild(FORM_FIELDSET_TEXT_INPUT);

                    const FORM_FIELDSET_ERROR_TEXT = document.createElement('label');
                        FORM_FIELDSET_ERROR_TEXT.htmlFor = 'text-input';
                        FORM_FIELDSET_ERROR_TEXT.className = 'error-text';
                        FORM_FIELDSET_ERROR_TEXT.textContent = 'No city with this name was found.';
                    CITY_SEARCHING_FORM_FIELDSET.appendChild(FORM_FIELDSET_ERROR_TEXT);

                    const FORM_FIELDSET_SUBMIT_INPUT = document.createElement('input');
                        FORM_FIELDSET_SUBMIT_INPUT.type = 'submit';
                        FORM_FIELDSET_SUBMIT_INPUT.value = 'SEARCH';
                        FORM_FIELDSET_SUBMIT_INPUT.id = 'submit-input';
                        FORM_FIELDSET_SUBMIT_INPUT.className = 'submit-input';
                    CITY_SEARCHING_FORM_FIELDSET.appendChild(FORM_FIELDSET_SUBMIT_INPUT);

                CITY_SEARCHING_FORM.appendChild(CITY_SEARCHING_FORM_FIELDSET);
            MAIN_SECTION.appendChild(CITY_SEARCHING_FORM);

        MAIN_SECTION.appendChild(CITY_SEARCHING_FORM);

    return MAIN_SECTION;
}

function createFooterSection() {
    const FOOTER_SECTION = document.createElement('footer');
    FOOTER_SECTION.className = 'footer-section';

        const CHALLENGE_RESOURCE_LINK = document.createElement('a');
            CHALLENGE_RESOURCE_LINK.href = 'https://www.theodinproject.com/lessons/node-path-javascript-weather-app/';
            CHALLENGE_RESOURCE_LINK.ariaLabel = 'Visit the website of this challenge.'
            CHALLENGE_RESOURCE_LINK.target = '_blank';
            CHALLENGE_RESOURCE_LINK.textContent = 'The Odin Project';
        FOOTER_SECTION.appendChild(CHALLENGE_RESOURCE_LINK);

        const GITHUB_REPO_LINK = document.createElement('a');
            GITHUB_REPO_LINK.href = 'https://htmlpreview.github.io/?https://github.com/selimbiber/Pure-JavaScript-Projects/blob/main/WeatherForecastApplication/dist/index.html/';
            GITHUB_REPO_LINK.ariaLabel = 'Visit code source repo of this project.'
            GITHUB_REPO_LINK.target = '_blank';

            const GITHUB_LOGO_ICON = document.createElement('img');
                GITHUB_LOGO_ICON.src = '../dist/images/github-logo.svg';
                GITHUB_LOGO_ICON.alt = '';
                GITHUB_LOGO_ICON.ariaHidden = 'true';
            GITHUB_REPO_LINK.appendChild(GITHUB_LOGO_ICON);

        FOOTER_SECTION.appendChild(GITHUB_REPO_LINK);

        const GITHUB_PROFILE_LINK = document.createElement('a');
            GITHUB_PROFILE_LINK.href = 'https://www.github.com/selimbiber/';
            GITHUB_PROFILE_LINK.ariaLabel = 'Visit my GitHub profile.'
            GITHUB_PROFILE_LINK.target = '_blank';
            GITHUB_PROFILE_LINK.textContent = 'Selim Biber';
        FOOTER_SECTION.appendChild(GITHUB_PROFILE_LINK);
        
    return FOOTER_SECTION;
}

export default function initializePageLayout() {
    const PAGE_CONTAINER = document.getElementById('page-container');

    PAGE_CONTAINER.appendChild( createHeaderSection() );
    PAGE_CONTAINER.appendChild( createMainSection() );
    PAGE_CONTAINER.appendChild( createFooterSection() );
}
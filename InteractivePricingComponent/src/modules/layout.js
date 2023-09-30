function createHeaderSection() {
    const HEADER_SECTION = document.createElement('header');
    HEADER_SECTION.className = 'header-section';

        const PAGE_HEADING = document.createElement('h1');
            PAGE_HEADING.className = 'page-heading';
            PAGE_HEADING.textContent = 'Simple, traffic-based pricing';
        HEADER_SECTION.appendChild(PAGE_HEADING);

        const HERO_TEXT_TOP = document.createElement('p');
            HERO_TEXT_TOP.className = 'hero-text';
            HERO_TEXT_TOP.textContent = 'Sign-up for our 30-day trial.';
        HEADER_SECTION.appendChild(HERO_TEXT_TOP);

        const HERO_TEXT_BOTTOM = document.createElement('p');
            HERO_TEXT_BOTTOM.className = 'hero-text';
            HERO_TEXT_BOTTOM.textContent = 'No credit card required.';
        HEADER_SECTION.appendChild(HERO_TEXT_BOTTOM);

    return HEADER_SECTION;
}

function createMainSection() {
    const MAIN_SECTION = document.createElement('main-section');
    MAIN_SECTION.className = 'main-section';

        const PRICING_FORM = document.createElement('form');
            PRICING_FORM.action = 'https://httpbin.org/post';
            PRICING_FORM.method = 'post';
            PRICING_FORM.className = 'pricing-form';

            const FORM_FIELDSET = document.createElement('fieldset');
                FORM_FIELDSET.className = 'form-fieldset';

                const LEGEND_TEXT = document.createElement('legend');
                LEGEND_TEXT.className = 'legend-text';

                    const PAGEVIEWS_COUNT = document.createElement('p');
                        PAGEVIEWS_COUNT.className = 'pageviews-count';
                    LEGEND_TEXT.appendChild(PAGEVIEWS_COUNT);

                    const PRICING_DATE_TEXT_DESKTOP_LAYOUT = document.createElement('p');
                    PRICING_DATE_TEXT_DESKTOP_LAYOUT.classList.add('pricing-date-text', 'desktop-layout');

                        const PRICING_TEXT_DESKTOP_LAYOUT = document.createElement('span');
                            PRICING_TEXT_DESKTOP_LAYOUT.classList.add('pricing-text', 'desktop-layout');
                        PRICING_DATE_TEXT_DESKTOP_LAYOUT.appendChild(PRICING_TEXT_DESKTOP_LAYOUT);

                        const DATE_TEXT_DESKTOP_LAYOUT = document.createElement('span');
                            DATE_TEXT_DESKTOP_LAYOUT.classList.add('date-text', 'desktop-layout');
                        PRICING_DATE_TEXT_DESKTOP_LAYOUT.appendChild(DATE_TEXT_DESKTOP_LAYOUT);

                    LEGEND_TEXT.appendChild(PRICING_DATE_TEXT_DESKTOP_LAYOUT);

                FORM_FIELDSET.appendChild(LEGEND_TEXT);

                const RANGE_INPUT = document.createElement('input');
                    RANGE_INPUT.type = 'range';
                    RANGE_INPUT.name = 'range-slider-input';
                    RANGE_INPUT.value = '40';
                    RANGE_INPUT.title = 'Select the number of pageviews for your plan';
                    RANGE_INPUT.className = 'range-slider';
                    RANGE_INPUT.min = '0';
                    RANGE_INPUT.max = '80';
                    RANGE_INPUT.step = '1';
                FORM_FIELDSET.appendChild(RANGE_INPUT);

                const PRICING_DATE_TEXT_MOBILE_LAYOUT = document.createElement('p');
                PRICING_DATE_TEXT_MOBILE_LAYOUT.classList.add('pricing-date-text', 'mobile-layout');

                    const PRICING_TEXT_MOBILE_LAYOUT = document.createElement('span');
                        PRICING_TEXT_MOBILE_LAYOUT.classList.add('pricing-text', 'mobile-layout');
                    PRICING_DATE_TEXT_MOBILE_LAYOUT.appendChild(PRICING_TEXT_MOBILE_LAYOUT);

                    const DATE_TEXT_MOBILE_LAYOUT = document.createElement('span');
                        DATE_TEXT_MOBILE_LAYOUT.classList.add('date-text', 'mobile-layout');
                    PRICING_DATE_TEXT_MOBILE_LAYOUT.appendChild(DATE_TEXT_MOBILE_LAYOUT);

                FORM_FIELDSET.appendChild(PRICING_DATE_TEXT_MOBILE_LAYOUT);

                const MONTHLY_YEARLY_BILLINGS_CONTAINER = document.createElement('div');
                MONTHLY_YEARLY_BILLINGS_CONTAINER.className = 'monthly-yearly-billings-container';

                    const MONTHLY_BILLING_TOGGLE_BTN_CONTAINER = document.createElement('label')
                        MONTHLY_BILLING_TOGGLE_BTN_CONTAINER.className = 'monthly-billing-text-btn-container';
                        MONTHLY_BILLING_TOGGLE_BTN_CONTAINER.textContent = 'Monthly Billing';
                        MONTHLY_BILLING_TOGGLE_BTN_CONTAINER.htmlFor = 'toggle-checkbox-btn';
                        
                        const TOGGLE_CHECKBOX_INPUT = document.createElement('input');
                        TOGGLE_CHECKBOX_INPUT.role = 'switch';
                            TOGGLE_CHECKBOX_INPUT.type = 'checkbox';
                            TOGGLE_CHECKBOX_INPUT.name = 'toggle-checkbox-btn';
                            TOGGLE_CHECKBOX_INPUT.setAttribute('id', 'toggle-checkbox-btn');
                        MONTHLY_BILLING_TOGGLE_BTN_CONTAINER.appendChild(TOGGLE_CHECKBOX_INPUT);

                        const TOGGLE_SLIDER_ROUND = document.createElement('div');
                            TOGGLE_SLIDER_ROUND.classList.add('toggle-slider', 'slider-round');
                        MONTHLY_BILLING_TOGGLE_BTN_CONTAINER.appendChild(TOGGLE_SLIDER_ROUND);

                    MONTHLY_YEARLY_BILLINGS_CONTAINER.appendChild(MONTHLY_BILLING_TOGGLE_BTN_CONTAINER);

                    const YEARLY_BILLING_TEXT = document.createElement('p');
                        YEARLY_BILLING_TEXT.className = 'yearly-billing-text';
                        YEARLY_BILLING_TEXT.textContent = 'Yearly Billing';

                        const YEARLY_BILLING_PERCENTAGE = document.createElement('span');
                            YEARLY_BILLING_PERCENTAGE.ariaLabel = 'Discount';
                            YEARLY_BILLING_PERCENTAGE.className = 'yearly-billing-percentage';
                            YEARLY_BILLING_PERCENTAGE.textContent = '-25%';
                        YEARLY_BILLING_TEXT.appendChild(YEARLY_BILLING_PERCENTAGE);

                    MONTHLY_YEARLY_BILLINGS_CONTAINER.appendChild(YEARLY_BILLING_TEXT);

                FORM_FIELDSET.appendChild(MONTHLY_YEARLY_BILLINGS_CONTAINER);

            PRICING_FORM.appendChild(FORM_FIELDSET);

                const INFO_LIST_START_BTN_CONTAINER = document.createElement('div');
                INFO_LIST_START_BTN_CONTAINER.className = 'info-list-start-btn_container';

                    const TRIAL_INFO_LIST = document.createElement('ul');
                    TRIAL_INFO_LIST.className = 'trial-info-list';

                        const UNLIMITED_WEBSITES_LIST_ITEM = document.createElement('li');
                            UNLIMITED_WEBSITES_LIST_ITEM.className = 'trial-info_list-item';
                            UNLIMITED_WEBSITES_LIST_ITEM.textContent = 'Unlimited websites';
                        TRIAL_INFO_LIST.appendChild(UNLIMITED_WEBSITES_LIST_ITEM);

                        const DATA_OWNERSHIP_LIST_ITEM = document.createElement('li');
                            DATA_OWNERSHIP_LIST_ITEM.className = 'trial-info_list-item';
                            DATA_OWNERSHIP_LIST_ITEM.textContent = '100% data ownership';
                        TRIAL_INFO_LIST.appendChild(DATA_OWNERSHIP_LIST_ITEM);

                        const EMAIL_REPORTS_LIST_ITEM = document.createElement('li');
                            EMAIL_REPORTS_LIST_ITEM.className = 'trial-info_list-item';
                            EMAIL_REPORTS_LIST_ITEM.textContent = 'Email reports';
                        TRIAL_INFO_LIST.appendChild(EMAIL_REPORTS_LIST_ITEM);

                    INFO_LIST_START_BTN_CONTAINER.appendChild(TRIAL_INFO_LIST);

                    const START_TRIAL_BTN = document.createElement('input');
                        START_TRIAL_BTN.type = 'submit';
                        START_TRIAL_BTN.value = 'Start my trial';
                        START_TRIAL_BTN.className = 'start-trial-btn';
                    INFO_LIST_START_BTN_CONTAINER.appendChild(START_TRIAL_BTN);

                PRICING_FORM.appendChild(INFO_LIST_START_BTN_CONTAINER);

        MAIN_SECTION.appendChild(PRICING_FORM);
    
    return MAIN_SECTION;
}

function createFooterSection() {
    const FOOTER_SECTION = document.createElement('footer');
    FOOTER_SECTION.className = 'footer-section';

        const CHALLENGE_RESOURCE_LINK = document.createElement('a');
            CHALLENGE_RESOURCE_LINK.href = 'https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8';
            CHALLENGE_RESOURCE_LINK.ariaLabel = 'Visit the website of this challenge.'
            CHALLENGE_RESOURCE_LINK.target = '_blank';
            CHALLENGE_RESOURCE_LINK.textContent = 'Challenged by Frontend Mentor';
        FOOTER_SECTION.appendChild(CHALLENGE_RESOURCE_LINK);

        const GITHUB_REPO_LINK = document.createElement('a');
            GITHUB_REPO_LINK.href = 'https://github.com/selimbiber/Pure-JavaScript-Projects/tree/main/InteractivePricingComponent/';
            GITHUB_REPO_LINK.ariaLabel = 'Visit code source repo of this project.'
            GITHUB_REPO_LINK.target = '_blank';

            const GITHUB_LOGO_ICON = `
                <svg class="github-logo" width="1024" height="1024" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg" hidden>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor"/>
                </svg>
            `;
            GITHUB_REPO_LINK.innerHTML += GITHUB_LOGO_ICON;

        FOOTER_SECTION.appendChild(GITHUB_REPO_LINK);

        const GITHUB_PROFILE_LINK = document.createElement('a');
            GITHUB_PROFILE_LINK.href = 'https://www.github.com/selimbiber/';
            GITHUB_PROFILE_LINK.ariaLabel = 'Visit my GitHub profile.'
            GITHUB_PROFILE_LINK.target = '_blank';
            GITHUB_PROFILE_LINK.textContent = 'Coded by Selim Biber';
        FOOTER_SECTION.appendChild(GITHUB_PROFILE_LINK);
        
    return FOOTER_SECTION;
}

export default function initializePageLayout() {
    const PAGE_CONTAINER = document.getElementById('page-container');

    PAGE_CONTAINER.appendChild( createHeaderSection() );
    PAGE_CONTAINER.appendChild( createMainSection() );
    PAGE_CONTAINER.appendChild( createFooterSection() );
}
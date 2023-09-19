function createUserReportSubsection() {
    const USER_REPORT_SUBSECTION = document.createElement('section');
    USER_REPORT_SUBSECTION.className = 'user-report_subsection';

        const USER_REPORT_PROFILE_CARD_CONTAINER = document.createElement('div');
        USER_REPORT_PROFILE_CARD_CONTAINER.className = 'profile-card-container';

            const PROFILE_CARD_IMG = document.createElement('img');
                PROFILE_CARD_IMG.className = 'profile-card-img'
                PROFILE_CARD_IMG.src = '../dist/images/image-jeremy.png';
                PROFILE_CARD_IMG.alt = 'Profile image of Jeremy Robson ';
            USER_REPORT_PROFILE_CARD_CONTAINER.appendChild(PROFILE_CARD_IMG);

            const PROFILE_CARD_TEXT = document.createElement('header')
            PROFILE_CARD_TEXT.className = 'profile-card-text';

                const PROFILE_CARD_HEADING = document.createElement('h1');
                    PROFILE_CARD_HEADING.className = 'profile-card-heading';
                    PROFILE_CARD_HEADING.textContent = 'Report for';
                PROFILE_CARD_TEXT.appendChild(PROFILE_CARD_HEADING);

                const PROFILE_CARD_NAME = document.createElement('h2');
                    PROFILE_CARD_NAME.className = 'profile-card-name';
                    PROFILE_CARD_NAME.textContent = 'Jeremy Robson';
                PROFILE_CARD_TEXT.appendChild(PROFILE_CARD_NAME);

            USER_REPORT_PROFILE_CARD_CONTAINER.appendChild(PROFILE_CARD_TEXT);

        USER_REPORT_SUBSECTION.appendChild(USER_REPORT_PROFILE_CARD_CONTAINER);

        const USER_REPORT_NAV_ITEMS_CONTAINER = document.createElement('nav');
        USER_REPORT_NAV_ITEMS_CONTAINER.className = 'nav-items-container';

            const DAILY_REPORT_BTN = document.createElement('button');
                DAILY_REPORT_BTN.className = 'user-report-btn';
                DAILY_REPORT_BTN.textContent = 'Daily';
                DAILY_REPORT_BTN.dataset.time = 'Last Day';
            USER_REPORT_NAV_ITEMS_CONTAINER.appendChild(DAILY_REPORT_BTN);

            const WEEKLY_REPORT_BTN = document.createElement('button');
                WEEKLY_REPORT_BTN.className = 'user-report-btn';
                WEEKLY_REPORT_BTN.textContent = 'Weekly';
                WEEKLY_REPORT_BTN.dataset.time = 'Last Week';
            USER_REPORT_NAV_ITEMS_CONTAINER.appendChild(WEEKLY_REPORT_BTN);

            const MONTHLY_REPORT_BTN = document.createElement('button');
                MONTHLY_REPORT_BTN.className = 'user-report-btn';
                MONTHLY_REPORT_BTN.textContent = 'Monthly';
                MONTHLY_REPORT_BTN.dataset.time = 'Last Month';
            USER_REPORT_NAV_ITEMS_CONTAINER.appendChild(MONTHLY_REPORT_BTN);

        USER_REPORT_SUBSECTION.appendChild(USER_REPORT_NAV_ITEMS_CONTAINER);

    return USER_REPORT_SUBSECTION;
}

function createReportCardsSubsection() {
    const REPORT_CARDS_SUBSECTION = document.createElement('section');
    REPORT_CARDS_SUBSECTION.className = 'report-cards-subsection';
    
    return REPORT_CARDS_SUBSECTION;
}

function createUserReportCard(timeType, activityName, hoursCount, comparedDate, comparedData) {
    const USER_REPORT_CARD = document.createElement('article');
    
    activityName === 'Self Care' ? USER_REPORT_CARD.classList.add('user-report-card', 'self-care') : USER_REPORT_CARD.classList.add('user-report-card', activityName.toLowerCase());
    

        const USER_REPORT_CARD_HEADER = document.createElement('header');
        USER_REPORT_CARD_HEADER.className = 'user-report-card_header';

            const USER_REPORT_CARD_TITLE = document.createElement('h3');
                USER_REPORT_CARD_TITLE.className = 'user-report-card_title';
                USER_REPORT_CARD_TITLE.textContent = activityName;
            USER_REPORT_CARD_HEADER.appendChild(USER_REPORT_CARD_TITLE);

            const USER_REPORT_CARD_OPTION_BTN = document.createElement('button');
                USER_REPORT_CARD_OPTION_BTN.className = 'user-report-card_btn';
                USER_REPORT_CARD_OPTION_BTN.title = 'Click the button to make transactions on this card.';
            USER_REPORT_CARD_HEADER.appendChild(USER_REPORT_CARD_OPTION_BTN);

        USER_REPORT_CARD.appendChild(USER_REPORT_CARD_HEADER);

        const USER_REPORT_CARD_DATA_COMPARISON_AREA = document.createElement('div');
        USER_REPORT_CARD_DATA_COMPARISON_AREA.className = 'user-report-card_data-comparison-area';

            const THIS_TIME_HOURS_COUNT = document.createElement('p');
                THIS_TIME_HOURS_COUNT.className = 'user-report-card_hours-count';
                THIS_TIME_HOURS_COUNT.textContent = `${hoursCount}hrs`;
                THIS_TIME_HOURS_COUNT.title = `${timeType} current hour data for this activity.`;
            USER_REPORT_CARD_DATA_COMPARISON_AREA.appendChild(THIS_TIME_HOURS_COUNT);

            const USER_REPORT_CARD_COMPARED_SUB_AREA = document.createElement('p');
                USER_REPORT_CARD_COMPARED_SUB_AREA.className = 'user-report-card_compared-sub-area';
                USER_REPORT_CARD_COMPARED_SUB_AREA.innerHTML = `${comparedDate} - ${comparedData}hrs`;
                USER_REPORT_CARD_COMPARED_SUB_AREA.title = `Previous ${timeType} hour data for this activity`;
            USER_REPORT_CARD_DATA_COMPARISON_AREA.appendChild(USER_REPORT_CARD_COMPARED_SUB_AREA);

        USER_REPORT_CARD.appendChild(USER_REPORT_CARD_DATA_COMPARISON_AREA);

    return USER_REPORT_CARD;
}

function initializePageLayout() {
    const MAIN_CONTAINER = document.getElementById('main-container');

    MAIN_CONTAINER.appendChild( createUserReportSubsection() );
    MAIN_CONTAINER.appendChild( createReportCardsSubsection() );
}

export { createUserReportCard, initializePageLayout }; 
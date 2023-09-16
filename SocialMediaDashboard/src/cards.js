function createMediaFollowersCountsSubsection() {
    const MEDIA_FOLLOWERS_COUNTS_SUBSECTION = document.createElement('section');
    MEDIA_FOLLOWERS_COUNTS_SUBSECTION.className = 'media-followers-counts-subsection';

    MEDIA_FOLLOWERS_COUNTS_SUBSECTION.appendChild(
        createUserMediaFollowersCountInfoCard(
            '../dist/images/icon-facebook.svg',
            '@nathanf',
            '1987',
            '../dist/images/icon-up.svg',
            '12'
        )
    );

    MEDIA_FOLLOWERS_COUNTS_SUBSECTION.appendChild(
        createUserMediaFollowersCountInfoCard(
            '../dist/images/icon-twitter.svg',
            '@nathanf',
            '1044',
            '../dist/images/icon-up.svg',
            '99'
        )
    );

    MEDIA_FOLLOWERS_COUNTS_SUBSECTION.appendChild(
        createUserMediaFollowersCountInfoCard(
            '../dist/images/icon-instagram.svg',
            '@realnathanf',
            '11k',
            '../dist/images/icon-up.svg',
            '1099'
        )
    );

    MEDIA_FOLLOWERS_COUNTS_SUBSECTION.appendChild(
        createUserMediaFollowersCountInfoCard(
            '../dist/images/icon-youtube.svg',
            'Nathan F.',
            '8239',
            '../dist/images/icon-down.svg',
            '144'
        )
    );

    return MEDIA_FOLLOWERS_COUNTS_SUBSECTION;
}

function createUserMediaFollowersCountInfoCard(mediaIcon, userName, mediaFollowersCountData, statsStateIcon, todayFollowersStats) {
    const USER_MEDIA_INFO_CARD = document.createElement('ul');
    USER_MEDIA_INFO_CARD.className = 'user-media_info-card';

    if ( mediaIcon.includes('facebook') ) {
        USER_MEDIA_INFO_CARD.classList.add('facebook');

    } else if ( mediaIcon.includes('twitter') ) {
        USER_MEDIA_INFO_CARD.classList.add('twitter');

    } else if ( mediaIcon.includes('instagram') ) {
        USER_MEDIA_INFO_CARD.classList.add('instagram');

    } else {
        USER_MEDIA_INFO_CARD.classList.add('youtube');
    }

    const USER_MEDIA_LINK_CONTAINER = document.createElement('li');

        const USER_MEDIA_LINK_HREF = document.createElement('a');
        USER_MEDIA_LINK_HREF.className = 'user-media_link-container'
            USER_MEDIA_LINK_HREF.href = '#';
        USER_MEDIA_LINK_CONTAINER.appendChild(USER_MEDIA_LINK_HREF);

            const USER_MEDIA_LINK_ICON_FIGURE = document.createElement('figure');
            USER_MEDIA_LINK_HREF.appendChild(USER_MEDIA_LINK_ICON_FIGURE);

                const USER_MEDIA_LINK_ICON_IMG = document.createElement('img');
                    USER_MEDIA_LINK_ICON_IMG.className = 'user-media_icon-img';
                    USER_MEDIA_LINK_ICON_IMG.src = mediaIcon;
                USER_MEDIA_LINK_ICON_FIGURE.appendChild(USER_MEDIA_LINK_ICON_IMG);

            const USER_MEDIA_NICK_NAME = document.createElement('p');
                USER_MEDIA_NICK_NAME.className = 'user-media_nick-name';
                USER_MEDIA_NICK_NAME.textContent = userName;
            USER_MEDIA_LINK_HREF.appendChild(USER_MEDIA_NICK_NAME);

    USER_MEDIA_INFO_CARD.appendChild(USER_MEDIA_LINK_CONTAINER);

    const USER_MEDIA_TOTAL_STATS_CONTAINER = document.createElement('li');
    USER_MEDIA_TOTAL_STATS_CONTAINER.className = 'user-media_total-stats-container';

        const USER_MEDIA_TOTAL_STATS_DATA = document.createElement('p');
            USER_MEDIA_TOTAL_STATS_DATA.className = 'user-media_total-stats-data';
            USER_MEDIA_TOTAL_STATS_DATA.textContent = mediaFollowersCountData;
        USER_MEDIA_TOTAL_STATS_CONTAINER.appendChild(USER_MEDIA_TOTAL_STATS_DATA);

        const USER_MEDIA_TOTAL_STATS_NAME = document.createElement('p');
            USER_MEDIA_TOTAL_STATS_NAME.className = 'user-media_total-stats-name';
            USER_MEDIA_TOTAL_STATS_NAME.textContent = mediaIcon.includes('youtube') ? 'SUBSCRIBERS' : 'FOLLOWERS';
        USER_MEDIA_TOTAL_STATS_CONTAINER.appendChild(USER_MEDIA_TOTAL_STATS_NAME);

    USER_MEDIA_INFO_CARD.appendChild(USER_MEDIA_TOTAL_STATS_CONTAINER);

    const USER_MEDIA_TODAY_STATS_CONTAINER = document.createElement('li');
    USER_MEDIA_TODAY_STATS_CONTAINER.className = 'user-media_today-stats-container';
        const USER_MEDIA_TODAY_STATS_ICON_FIGURE = document.createElement('figure');

            const USER_MEDIA_TODAY_STATS_ICON_IMG = document.createElement('img');
            USER_MEDIA_LINK_ICON_IMG.className = 'today-stats-state_icon-img';
            USER_MEDIA_TODAY_STATS_ICON_IMG.src = statsStateIcon;
            USER_MEDIA_TODAY_STATS_ICON_FIGURE.appendChild(USER_MEDIA_TODAY_STATS_ICON_IMG);

        USER_MEDIA_TODAY_STATS_CONTAINER.appendChild(USER_MEDIA_TODAY_STATS_ICON_FIGURE);

        const USER_MEDIA_TODAY_STATS_DATA = document.createElement('p');
            USER_MEDIA_TODAY_STATS_DATA.className = 'user-media_today-stats-data';
            statsStateIcon.includes('down') ? USER_MEDIA_TODAY_STATS_DATA.classList.add('stats-down') : '';
            USER_MEDIA_TODAY_STATS_DATA.textContent = `${todayFollowersStats} Today`;
        USER_MEDIA_TODAY_STATS_CONTAINER.appendChild(USER_MEDIA_TODAY_STATS_DATA);

    USER_MEDIA_INFO_CARD.appendChild(USER_MEDIA_TODAY_STATS_CONTAINER);

    return USER_MEDIA_INFO_CARD;
}

function createMediaOverviewCardsSubsection() {
    const TODAY_STATS_OVERVIEW_CARDS_SUBSECTION = document.createElement('section');
    TODAY_STATS_OVERVIEW_CARDS_SUBSECTION.className = 'overview-cards-subsection'

    const SUB_HEADING_CONTAINER = document.createElement('header');
    TODAY_STATS_OVERVIEW_CARDS_SUBSECTION.appendChild(SUB_HEADING_CONTAINER);
        const SUB_HEADING_TEXT = document.createElement('h2');
        SUB_HEADING_TEXT.className = 'sub-heading-text';
        SUB_HEADING_TEXT.textContent = 'Overview - Today';
    SUB_HEADING_CONTAINER.appendChild(SUB_HEADING_TEXT);

    const OVERVIEW_CARDS_CONTAINER_ONE = document.createElement('ul');
    OVERVIEW_CARDS_CONTAINER_ONE.className = 'overview-cards-container';

        OVERVIEW_CARDS_CONTAINER_ONE.appendChild(
            createUserMediaStatsOverviewCard(
                'Page Views',
                '../dist/images/icon-facebook.svg',
                '87',
                '../dist/images/icon-up.svg',
                '3%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_ONE.appendChild(
            createUserMediaStatsOverviewCard(
                'Likes',
                '../dist/images/icon-facebook.svg',
                '52',
                '../dist/images/icon-down.svg',
                '2%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_ONE.appendChild(
            createUserMediaStatsOverviewCard(
                'Likes',
                '../dist/images/icon-instagram.svg',
                '5462',
                '../dist/images/icon-up.svg',
                '2257%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_ONE.appendChild(
            createUserMediaStatsOverviewCard(
                'Profile Views',
                '../dist/images/icon-instagram.svg',
                '52k',
                '../dist/images/icon-up.svg',
                '1375%'
            )
        );

    TODAY_STATS_OVERVIEW_CARDS_SUBSECTION.appendChild(OVERVIEW_CARDS_CONTAINER_ONE);

    const OVERVIEW_CARDS_CONTAINER_TWO = document.createElement('ul');
    OVERVIEW_CARDS_CONTAINER_TWO.className = 'overview-cards-container';

        OVERVIEW_CARDS_CONTAINER_TWO.appendChild(
            createUserMediaStatsOverviewCard(
                'Retweets',
                '../dist/images/icon-twitter.svg',
                '117',
                '../dist/images/icon-up.svg',
                '303%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_TWO.appendChild(
            createUserMediaStatsOverviewCard(
                'Likes',
                '../dist/images/icon-twitter.svg',
                '507',
                '../dist/images/icon-up.svg',
                '553%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_TWO.appendChild(
            createUserMediaStatsOverviewCard(
                'Likes',
                '../dist/images/icon-youtube.svg',
                '107',
                '../dist/images/icon-down.svg',
                '19%'
            )
        );

        OVERVIEW_CARDS_CONTAINER_TWO.appendChild(
            createUserMediaStatsOverviewCard(
                'Total Views',
                '../dist/images/icon-youtube.svg',
                '1407',
                '../dist/images/icon-down.svg',
                '12%'
            )
        );

    TODAY_STATS_OVERVIEW_CARDS_SUBSECTION.appendChild(OVERVIEW_CARDS_CONTAINER_TWO);

    return TODAY_STATS_OVERVIEW_CARDS_SUBSECTION;
}

function createUserMediaStatsOverviewCard(statsName, mediaIcon, numberData, arrowIcon, percentageData) {
    const STATS_OVERVIEW_CARD = document.createElement('ul');
    STATS_OVERVIEW_CARD.className = 'stats-overview-card';

        const STATS_NAME_DAILY_DATA = document.createElement('li');
            STATS_NAME_DAILY_DATA.className = 'stats-name_daily-data';

                const OVERVIEW_CARD_STATS_NAME = document.createElement('p');
                    OVERVIEW_CARD_STATS_NAME.className = 'overview-card_stats-name';
                    OVERVIEW_CARD_STATS_NAME.textContent = statsName;
                STATS_NAME_DAILY_DATA.appendChild(OVERVIEW_CARD_STATS_NAME);

                const OVERVIEW_CARD_DAILY_DATA = document.createElement('p');
                    OVERVIEW_CARD_DAILY_DATA.className = 'overview-card_daily-data';
                    OVERVIEW_CARD_DAILY_DATA.textContent = numberData;
                STATS_NAME_DAILY_DATA.appendChild(OVERVIEW_CARD_DAILY_DATA);

        STATS_OVERVIEW_CARD.appendChild(STATS_NAME_DAILY_DATA);

        const MEDIA_ICON_DAILY_STATE = document.createElement('li');
            MEDIA_ICON_DAILY_STATE.className = 'media-icon_daily-state';

                const OVERVIEW_CARD_MEDIA_ICON = document.createElement('img');
                    OVERVIEW_CARD_MEDIA_ICON.alt = mediaIcon;
                    OVERVIEW_CARD_MEDIA_ICON.src = mediaIcon;
                    OVERVIEW_CARD_MEDIA_ICON.className = 'overview-card_media-icon';
                MEDIA_ICON_DAILY_STATE.appendChild(OVERVIEW_CARD_MEDIA_ICON);

                const OVERVIEW_CARD_DAILY_STATE = document.createElement('div');
                    OVERVIEW_CARD_DAILY_STATE.className = 'overview-card_daily-state';

                    const DAILY_STATE_ARROW_ICON_FIGURE = document.createElement('figure');
                        const DAILY_STATE_ARROW_ICON_FIGURE_IMG = document.createElement('img');
                        DAILY_STATE_ARROW_ICON_FIGURE_IMG.src = arrowIcon;
                        DAILY_STATE_ARROW_ICON_FIGURE.appendChild(DAILY_STATE_ARROW_ICON_FIGURE_IMG);
                    OVERVIEW_CARD_DAILY_STATE.appendChild(DAILY_STATE_ARROW_ICON_FIGURE);
                    
                    const DAILY_STATE_PERCENTAGE_DATA = document.createElement('p')
                        DAILY_STATE_PERCENTAGE_DATA.className = 'overview-card_percentage-data';
                        arrowIcon.includes('down') ? DAILY_STATE_PERCENTAGE_DATA.classList.add('stats-down') : '';
                        DAILY_STATE_PERCENTAGE_DATA.textContent = percentageData;
                    OVERVIEW_CARD_DAILY_STATE.appendChild(DAILY_STATE_PERCENTAGE_DATA);
                    
                MEDIA_ICON_DAILY_STATE.appendChild(OVERVIEW_CARD_DAILY_STATE);

        STATS_OVERVIEW_CARD.appendChild(MEDIA_ICON_DAILY_STATE);
    
    return STATS_OVERVIEW_CARD;
}

function loadSubsectionsToMainSection() {
    const MAIN_SECTION = document.querySelector('.main-section');

    MAIN_SECTION.appendChild( createMediaFollowersCountsSubsection() );
    MAIN_SECTION.appendChild( createMediaOverviewCardsSubsection() );
}

export default loadSubsectionsToMainSection;
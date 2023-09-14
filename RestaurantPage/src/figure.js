function createFigureSubsection() {
    const FIGURE_SUBSECTION = document.createElement('section');
    FIGURE_SUBSECTION.className = 'figure-subsection';

    const HERO_FIGURE = document.createElement('figure');
    FIGURE_SUBSECTION.appendChild(HERO_FIGURE);

    const HERO_FIGURE_IMG = document.createElement('img');
        HERO_FIGURE_IMG.className = 'figure-subsection_image';
        HERO_FIGURE_IMG.src = '../dist/images/restaurant.jpg';
    HERO_FIGURE.appendChild(HERO_FIGURE_IMG);

    return FIGURE_SUBSECTION;
}

function loadFigureSubsection() {
    const MAIN_SECTION = document.querySelector('.main-section');
    MAIN_SECTION.appendChild( createFigureSubsection() );
}

export default loadFigureSubsection;
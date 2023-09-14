function createAboutSubsection() {
    const ABOUT_SUBSECTION = document.createElement('section');
    ABOUT_SUBSECTION.setAttribute('id', 'about-subsection');
    ABOUT_SUBSECTION.className = 'about-subsection';
        const ABOUT_SUBSECTION_HEADER = document.createElement('header');
        ABOUT_SUBSECTION.appendChild(ABOUT_SUBSECTION_HEADER);
            const ABOUT_SUBSECTION_HEADING = document.createElement('h2');
                ABOUT_SUBSECTION_HEADING.textContent = 'The Ottoman Cuisine';
                ABOUT_SUBSECTION_HEADING.className = 'about-subsection_heading';
            ABOUT_SUBSECTION_HEADER.appendChild(ABOUT_SUBSECTION_HEADING);

            ABOUT_SUBSECTION_HEADER.appendChild(createParagraph('One of the renowned three cuisines', 'about-section_info'));

        const ABOUT_SUBSECTION_IMAGE = document.createElement('img');
            ABOUT_SUBSECTION_IMAGE.className = 'about-subsection_image';
            ABOUT_SUBSECTION_IMAGE.src = '../dist/images/ottoman-restaurant-2.jpg';
            ABOUT_SUBSECTION_IMAGE.alt = 'image of the ottoman restaurant';
        ABOUT_SUBSECTION.appendChild(ABOUT_SUBSECTION_IMAGE);

        const ABOUT_SUBSECTION_ARTICLE = document.createElement('article');
            ABOUT_SUBSECTION_ARTICLE.className = 'about-subsection_article';
        ABOUT_SUBSECTION.appendChild(ABOUT_SUBSECTION_ARTICLE);

        ABOUT_SUBSECTION_ARTICLE.appendChild(
            createParagraph(
                'The Turkish tribes that once took the long trek from Asia to Anatolia had carried with much success this rich culture which stemmed from the Far and which they had enriched with the materials gathered from every country along their pathway to their new homeland cradling so many civilisations. It was quite logical that the culinary culture would receive its right place in this process.', 
                'article-text'
            )
        );
        ABOUT_SUBSECTION_ARTICLE.appendChild(
            createParagraph(
                'The task in their new homeland was communicated to the newcomers with the sacrosanct order of “feed the hungry, cloth the poor, rebuild the ruins and increase the population”. Thus have evolved, developed and acquired renown the Ottoman culture.', 
                'article-text'
            )
        );
        ABOUT_SUBSECTION_ARTICLE.appendChild(
            createParagraph(
                'There were a lot of elements to develop this flexible cultural acquis in the new homeland: The country was first of all encircled by three seas: Black Sea, Aegean Sea and Mediterranean and the two straits (İstanbul strait and Dardanelles) connecting them were offering their unmatched fertility to the squatters while the Anatolia, with the benefit of living all four seasons at the same time was providing fresh vegetables and fruits to the entire country that had the luxury of a springtime in the West, summer in the South and a mild autumn along the Black Sea coast. Don’t we still have the same pleasure? Which encompassed the Anatolia and the European soils of the empire, together with the culinary culture constituting and important component of the former.', 'article-text'
            )
        );
        ABOUT_SUBSECTION_ARTICLE.appendChild(
            createParagraph(
                'These conditions have made the Ottoman kitchen one of the three grands of the world.', 'article-text'
            )
        );

        const ABOUT_SUBSECTION_FOOTER = document.createElement('footer');
            ABOUT_SUBSECTION_FOOTER.className = 'about-subsection_footer';
        ABOUT_SUBSECTION.appendChild(ABOUT_SUBSECTION_FOOTER);

            const ABOUT_SUBSECTION_FOOTER_LINK = document.createElement('a');
                ABOUT_SUBSECTION_FOOTER_LINK.className = 'article-resource-link';
                ABOUT_SUBSECTION_FOOTER_LINK.href = 'https://www.ktb.gov.tr/EN-98797/the-ottoman-cuisine.html';
                ABOUT_SUBSECTION_FOOTER_LINK.target = '_blank';
                ABOUT_SUBSECTION_FOOTER_LINK.textContent = 'Click this link for read more.'
            ABOUT_SUBSECTION_FOOTER.appendChild(ABOUT_SUBSECTION_FOOTER_LINK);
    return ABOUT_SUBSECTION;
}

function createParagraph(textContent, className) {
    const PARAGRAPH = document.createElement('p');
    PARAGRAPH.textContent = textContent;
    PARAGRAPH.className = className;
    return PARAGRAPH;
}

function loadAboutSubsection() {
    const MAIN_SECTION = document.querySelector('.main-section')
    MAIN_SECTION.appendChild( createAboutSubsection() );
}

export default loadAboutSubsection;
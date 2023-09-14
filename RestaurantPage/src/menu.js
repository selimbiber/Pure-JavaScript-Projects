function createMenuSubsection() {
    const MENU_SUBSECTION = document.createElement('section');
        MENU_SUBSECTION.setAttribute('id', 'menu-subsection');
        MENU_SUBSECTION.className = 'menu-subsection';

    const MENU_SUBSECTION_HEADER = document.createElement('header')
    MENU_SUBSECTION.appendChild(MENU_SUBSECTION_HEADER);

        const HEADER_SLOGAN = document.createElement('h2');
            HEADER_SLOGAN.className = 'menu-subsection_slogan';
            HEADER_SLOGAN.textContent = 'Amazing Taste From History';
        MENU_SUBSECTION_HEADER.appendChild(HEADER_SLOGAN);
    
    const MENU_SUBSECTION_LIST = document.createElement('ul');
        MENU_SUBSECTION_LIST.className = 'menu-subsection_list';
    MENU_SUBSECTION.appendChild(MENU_SUBSECTION_LIST);
        MENU_SUBSECTION_LIST.appendChild(
            createMenuFoodItem(
                '../dist/images/beyrani-soup.webp', 
                'Beyrani Soup', 
                'menu-subsection_food-item'
            )
        );
        MENU_SUBSECTION_LIST.appendChild(
            createMenuFoodItem(
                '../dist/images/mahmudiye.webp', 
                'Mahmudiye', 
                'menu-subsection_food-item'
            )
        );
        MENU_SUBSECTION_LIST.appendChild(
            createMenuFoodItem(
                '../dist/images/mutancana.webp', 
                'Mutancana', 
                'menu-subsection_food-item'
            )
        );
        MENU_SUBSECTION_LIST.appendChild(
            createMenuFoodItem(
                '../dist/images/fodula.webp', 
                'Fodula', 
                'menu-subsection_food-item'
            )
        );

    return MENU_SUBSECTION;
}

function createMenuFoodItem(itemImage, itemName, itemClass) {
    const MENU_FOOD_ITEM = document.createElement('li');
    MENU_FOOD_ITEM.className = itemClass;

    const MENU_FOOD_IMAGE = document.createElement('img');
        MENU_FOOD_IMAGE.src = itemImage;
        MENU_FOOD_IMAGE.alt = itemName;
    MENU_FOOD_ITEM.appendChild(MENU_FOOD_IMAGE);

    const MENU_FOOD_NAME = document.createElement('h3');
        MENU_FOOD_NAME.textContent = itemName;
    MENU_FOOD_ITEM.appendChild(MENU_FOOD_NAME);

    return MENU_FOOD_ITEM;
}

function loadMenuSubsection() {
    const MAIN_SECTION = document.querySelector('.main-section');
    MAIN_SECTION.appendChild( createMenuSubsection() );
}

export default loadMenuSubsection;
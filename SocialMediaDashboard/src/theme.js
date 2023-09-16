function toggleThemeMode() {
    const TOGGLE_THEME_BTN = document.querySelector('#toggle-theme_checkbox-btn');
    const PREFERS_DARK_THEME = window.matchMedia("(prefers-color-scheme: dark)");

    if (PREFERS_DARK_THEME.matches) {
        document.body.classList.add("dark-mode");
        TOGGLE_THEME_BTN.checked = 'true';
    }

    TOGGLE_THEME_BTN.addEventListener('click', () => {
        if ( document.body.classList.contains("dark-mode") ) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
    });
}

export default toggleThemeMode;
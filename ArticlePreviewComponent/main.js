const DEFAULT_FOOTER = document.getElementById('default-footer')
const DEFAULT_SHARE_BTN = document.getElementById('default-footer_btn-share')

const ALTERNATIVE_FOOTER = document.getElementById('alternative-footer')
const ALTERNATIVE_SHARE_BTN_MOBILE = document.getElementById('alternative-footer_btn-share-mobile')

const SHARE_LINKS_TOOLTIP_AREA = document.getElementById('share-links-tooltip-area')
const ALTERNATIVE_SHARE_BTN_DESKTOP = document.getElementById('alternative-footer_btn-share-desktop')

if (window.innerWidth < 1440) {
    DEFAULT_SHARE_BTN.addEventListener('click', () => {
        DEFAULT_FOOTER.style.display = 'none';
        ALTERNATIVE_FOOTER.style.display = 'flex';
    });
    ALTERNATIVE_SHARE_BTN_MOBILE.addEventListener('click', () => {
        DEFAULT_FOOTER.style.display = 'flex';
        ALTERNATIVE_FOOTER.style.display = 'none';
    });
} else {
    DEFAULT_SHARE_BTN.addEventListener('click', () => {
        DEFAULT_SHARE_BTN.style.display = 'none';
        ALTERNATIVE_SHARE_BTN_DESKTOP.style.display = 'flex';
        SHARE_LINKS_TOOLTIP_AREA.classList.add('active-share-links-tooltip-area')
    });
    ALTERNATIVE_SHARE_BTN_DESKTOP.addEventListener('click', () => {
        DEFAULT_SHARE_BTN.style.display = 'flex';
        ALTERNATIVE_SHARE_BTN_DESKTOP.style.display = 'none';
        SHARE_LINKS_TOOLTIP_AREA.classList.remove('active-share-links-tooltip-area')
    });
}
const STEP_1_SWITCH = document.getElementById('step-1-switch')
const STEP_2_SWITCH = document.getElementById('step-2-switch')
const STEP_3_SWITCH = document.getElementById('step-3-switch')
const TABS_AREA_HEADING = document.getElementById('tabs-area-heading')
const STEP_1_TEXT = document.getElementById('step-1-text')
const STEP_2_TEXT = document.getElementById('step-2-text')
const STEP_3_TEXT = document.getElementById('step-3-text')

let activeTab;

STEP_1_SWITCH.addEventListener( 'click', () => setActiveTab('Step1') );
STEP_2_SWITCH.addEventListener( 'click', () => setActiveTab('Step2') );
STEP_3_SWITCH.addEventListener( 'click', () => setActiveTab('Step3') );

function setActiveTab (currentTab) {
    STEP_1_SWITCH.classList = '';
    STEP_2_SWITCH.classList = '';
    STEP_3_SWITCH.classList = '';
    activeTab = currentTab;
    function showActiveTabArea () {
        if (activeTab === 'Step1') {
            STEP_1_SWITCH.classList.add('active-tab')
            TABS_AREA_HEADING.textContent = 'Step 1'
            STEP_1_TEXT.style.display = 'block'

            STEP_2_TEXT.style.display = 'none'
            STEP_3_TEXT.style.display = 'none'
        } else if (activeTab === 'Step2') {
            STEP_2_SWITCH.classList.add('active-tab')
            TABS_AREA_HEADING.textContent = 'Step 2'
            STEP_2_TEXT.style.display = 'block'

            STEP_1_TEXT.style.display = 'none'
            STEP_3_TEXT.style.display = 'none'
        } else if (activeTab === 'Step3') {
            STEP_3_SWITCH.classList.add('active-tab')
            TABS_AREA_HEADING.textContent = 'Step 3'
            STEP_3_TEXT.style.display = 'block'

            STEP_1_TEXT.style.display = 'none'
            STEP_2_TEXT.style.display = 'none'
        }
    }
    showActiveTabArea()
}
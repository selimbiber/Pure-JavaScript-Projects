const USED_CODES = ['default'];
const CREATED_NOTES = [{code: 'default', text: ''}];

window.localStorage.setItem( 'noteItems', JSON.stringify(CREATED_NOTES) );

class Note {
    constructor(code, text) {
        this.code = code;
        this.text = text;
    }
}

document.querySelector('.create-note-btn').addEventListener('click', createNewNoteTextArea);

function createNewNoteTextArea() {
    const TEXT_AREA = document.createElement('textarea');
        TEXT_AREA.name = 'textarea';
        TEXT_AREA.className = 'note-text-area';
        TEXT_AREA.placeholder = 'Empty Note';
        TEXT_AREA.dataset.code = generateNewCode();
    document.querySelector('.main-section').insertBefore( TEXT_AREA, document.querySelector('.create-note-btn') );
    
    //? SAVE NEW NOTE TO LOCAL STORAGE
    const NEW_NOTE = new Note(TEXT_AREA.dataset.code, TEXT_AREA.value);
    CREATED_NOTES.push(NEW_NOTE);
    window.localStorage.setItem( 'noteItems', JSON.stringify(CREATED_NOTES) );
}

function generateNewCode() {
    let newCode = "";
    const allLeters = 'abcdefghijklmnopqrstuvwxyzABcDEFGHIJKLMOPQRSTUVWXYZ';

    do {
        newCode = "";
        for (let i = 0; i < Math.floor(Math.random() * 26); i++) {
            newCode += allLeters.charAt( Math.floor(Math.random() * allLeters.length) );
        }
    } while (USED_CODES.includes(newCode) || newCode.trim() === "");
    
    USED_CODES.push(newCode);

    return newCode;
}
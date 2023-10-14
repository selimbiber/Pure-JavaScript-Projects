const USED_CODES = [];
const CREATED_NOTES = [];

class Note {
    constructor(code, text) {
        this.code = code;
        this.text = text;
    }
}

document.querySelector('.create-note-btn').addEventListener('click', createNoteTextArea);

function createNoteTextArea(node, text) {
    const TEXT_AREA = document.createElement('textarea');
        TEXT_AREA.name = 'textarea';
        TEXT_AREA.className = 'note-text-area';
        TEXT_AREA.placeholder = 'Empty Note';
        TEXT_AREA.dataset.code = typeof node != 'object' ? node : generateNewCode();
        TEXT_AREA.value = typeof text != 'undefined' ? text : '';
    document.querySelector('.main-section').insertBefore( TEXT_AREA, document.querySelector('.create-note-btn') );
    
    //? SAVE CREATED NOTE TO LOCAL STORAGE
    const NEW_NOTE = new Note(TEXT_AREA.dataset.code, TEXT_AREA.value);
    CREATED_NOTES.push(NEW_NOTE);
    window.localStorage.setItem( 'noteItems', JSON.stringify(CREATED_NOTES) );

    //? UPDATE LOCAL STORAGE IF ANY NOTE CHANGED
    TEXT_AREA.addEventListener('input', () => {
        const UPDATED_NOTE_ITEM = new Note(TEXT_AREA.dataset.code, TEXT_AREA.value);
        const OUTDATED_NOTE_ARRAY_INDEX = CREATED_NOTES.findIndex(oldNote => oldNote.code === TEXT_AREA.dataset.code);

        if (OUTDATED_NOTE_ARRAY_INDEX !== false) {
            CREATED_NOTES.splice(OUTDATED_NOTE_ARRAY_INDEX, 1, UPDATED_NOTE_ITEM);
            window.localStorage.setItem( 'noteItems', JSON.stringify(CREATED_NOTES) );
        }
    });

    //? DELETE NOTE ITEM AND UPDATE LOCAL STORAGE
    TEXT_AREA.ondblclick = () => {
        const WARNING = confirm('Do you want to delete this note?');
        if (WARNING) {
            const DELETED_NOTE_ARRAY_INDEX = CREATED_NOTES.findIndex(currentNote => currentNote.code === TEXT_AREA.dataset.code);

            if (DELETED_NOTE_ARRAY_INDEX !== false) {
                CREATED_NOTES.splice(DELETED_NOTE_ARRAY_INDEX, 1);
                window.localStorage.setItem( 'noteItems', JSON.stringify(CREATED_NOTES) );
                TEXT_AREA.remove();
            }
        }
    };

    //? HELPER FUNCTION
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
}
//? WHEN PAGE IS RELOAD LOAD NOTES FROM LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    const OLD_NOTES = JSON.parse(window.localStorage.getItem('noteItems') );
    if (OLD_NOTES) {
        OLD_NOTES.forEach(oldNote => {
            createNoteTextArea(oldNote.code, oldNote.text);
        });
    } else {
        createNoteTextArea('defaultItem');
    }
});
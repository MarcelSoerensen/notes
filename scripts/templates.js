
function getNoteTemplate(indexNote) {
    return /*html*/`
        <div onclick="renderNoteOnFocus(${indexNote})" class="note">
            <p class="note_top"><b>${allNotes.notesTitles[indexNote]}</b></p>
            <p class="note_middle">${allNotes.notes[indexNote]}</p>
            <div class="note_bottom">
                <img class="archive_icon" onclick="moveNote(${indexNote},'notes','archiveNotes'), overlayPrevention(event)" src="./assets/icons/archive-iconsax-svgrepo-com.svg" title="archivieren" alt="archive">
                <img onclick="moveNote(${indexNote},'notes','trashNotes'), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return /*html*/`
        <div onclick="renderArchiveOnFocus(${indexArchiveNote})" class="note">
            <p class="note_top"><b>${allNotes.archiveNotesTitles[indexArchiveNote]}</b></p>
            <p class="note_middle">${allNotes.archiveNotes[indexArchiveNote]}</p>
            <div class="note_bottom">
                <img onclick="moveNote(${indexArchiveNote},'archiveNotes','notes'), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="moveNote(${indexArchiveNote},'archiveNotes','trashNotes'), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getTrashNoteTemplate(indexTrashNote) {
    return /*html*/`
        <div onclick="renderTrashOnFocus(${indexTrashNote})" class="note">
            <p class="note_top"><b>${allNotes.trashNotesTitles[indexTrashNote]}</b></p>
            <p class="note_middle">${allNotes.trashNotes[indexTrashNote]}</p>
            <div class="note_bottom">
                <img onclick="moveNote(${indexTrashNote},'trashNotes','notes'), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="deleteNote(${indexTrashNote}), overlayPrevention(event)" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getNoteOnFocus(indexFocusedNote) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.notesTitles[indexFocusedNote]}</b></p>
            <p class="note_middle">${allNotes.notes[indexFocusedNote]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img class="archive_icon" onclick="moveNote(${indexFocusedNote},'notes','archiveNotes'), overlayPrevention(event)" src="./assets/icons/archive-iconsax-svgrepo-com.svg" title="archivieren" alt="archive">
                    <img onclick="moveNote(${indexFocusedNote},'notes','trashNotes'), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash"> 
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getArchiveOnFocus(indexFocusedArchiveNote) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.archiveNotesTitles[indexFocusedArchiveNote]}</b></p>
            <p class="note_middle">${allNotes.archiveNotes[indexFocusedArchiveNote]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img onclick="moveNote(${indexFocusedArchiveNote},'archiveNotes','notes'), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                    <img onclick="moveNote(${indexFocusedArchiveNote},'archiveNotes','trashNotes'), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getTrashOnFocus(indexFocusedTrashNote) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.trashNotesTitles[indexFocusedTrashNote]}</b></p>
            <p class="note_middle">${allNotes.trashNotes[indexFocusedTrashNote]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img onclick="moveNote(${indexFocusedTrashNote},'trashNotes','notes'), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                    <img onclick="deleteNote(${indexFocusedTrashNote}), overlayPrevention(event)" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}
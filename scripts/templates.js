
function getNoteTemplate(indexNote) {
    return /*html*/`
        <div onclick="renderNoteOnFocus(${indexNote})" class="note">
            <p class="note_top"><b>${allNotes.notesTitles[indexNote]}</b></p>
            <p class="note_middle">${allNotes.notesContent[indexNote]}</p>
            <div class="note_bottom">
                <img class="archive_icon" onclick="pushNoteToArchive(${indexNote}), overlayPrevention(event)" src="./assets/icons/archive-iconsax-svgrepo-com.svg" title="archivieren" alt="archive">
                <img onclick="pushNoteFromNotesToTrash(${indexNote}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return /*html*/`
        <div onclick="renderArchiveOnFocus(${indexArchiveNote})" class="note">
            <p class="note_top"><b>${allNotes.archiveNotesTitles[indexArchiveNote]}</b></p>
            <p class="note_middle">${allNotes.archiveNotesContent[indexArchiveNote]}</p>
            <div class="note_bottom">
                <img onclick="restoreNoteFromArchive(${indexArchiveNote}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="pushNoteFromArchiveToTrash(${indexArchiveNote}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getTrashNoteTemplate(indexTrashNote) {
    return /*html*/`
        <div onclick="renderTrashOnFocus(${indexTrashNote})" class="note">
            <p class="note_top"><b>${allNotes.trashNotesTitles[indexTrashNote]}</b></p>
            <p class="note_middle">${allNotes.trashNotesContent[indexTrashNote]}</p>
            <div class="note_bottom">
                <img onclick="restoreNoteFromTrash(${indexTrashNote}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="deleteNote(${indexTrashNote}), overlayPrevention(event)" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getNoteOnFocus(i) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.notesTitles[i]}</b></p>
            <p class="note_middle">${allNotes.notesContent[i]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img class="archive_icon" onclick="pushNoteToArchive(${i}), overlayPrevention(event)" src="./assets/icons/archive-iconsax-svgrepo-com.svg" title="archivieren" alt="archive">
                    <img onclick="pushNoteFromNotesToTrash(${i}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash"> 
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getArchiveOnFocus(i) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.archiveNotesTitles[i]}</b></p>
            <p class="note_middle">${allNotes.archiveNotesContent[i]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img onclick="restoreNoteFromArchive(${i}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                    <img onclick="pushNoteFromArchiveToTrash(${i}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getTrashOnFocus(i) {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${allNotes.trashNotesTitles[i]}</b></p>
            <p class="note_middle">${allNotes.trashNotesContent[i]}</p>
            <div class="note_bottom">
                <div class="note_on_focus_buttons">
                    <img onclick="restoreNoteFromTrash(${i}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                    <img onclick="deleteNote(${i}), overlayPrevention(event)" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
                </div>
                <img onclick="closeFocusedContent()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}
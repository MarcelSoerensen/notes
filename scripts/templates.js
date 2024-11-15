
function getNoteTemplate(indexNote) {
    return /*html*/`
        <div onclick="renderNoteOnFocus()" class="note">
            <p class="note_top"><b>${notesTitles[indexNote]}</b></p>
            <p class="note_middle">${notesContent[indexNote]}</p>
            <div class="note_bottom">
                <img class="archive_icon" onclick="pushNoteToArchive(${indexNote}), overlayPrevention(event)" src="./assets/icons/archive-iconsax-svgrepo-com.svg" title="archivieren" alt="archive">
                <img onclick="pushNoteFromNotesToTrash(${indexNote}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return /*html*/`
        <div onclick="renderNoteOnFocus()" class="note">
            <p class="note_top"><b>${archiveNotesTitles[indexArchiveNote]}</b></p>
            <p class="note_middle">${archiveNotesContent[indexArchiveNote]}</p>
            <div class="note_bottom">
                <img onclick="restoreNoteFromArchive(${indexArchiveNote}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="pushNoteFromArchiveToTrash(${indexArchiveNote}), overlayPrevention(event)" src="./assets/icons/trash-iconsax-svgrepo-com.svg" title="wegwerfen" alt="trash">
            </div>
        </div>
        `;
}

function getTrashNoteTemplate(indexTrashNote) {
    return /*html*/`
        <div onclick="renderNoteOnFocus()" class="note">
            <p class="note_top"><b>${trashNotesTitles[indexTrashNote]}</b></p>
            <p class="note_middle">${trashNotesContent[indexTrashNote]}</p>
            <div class="note_bottom">
                <img onclick="restoreNoteFromTrash(${indexTrashNote}), overlayPrevention(event)" src="./assets/icons/rotate-right-iconsax-svgrepo-com.svg" title="wiederherstellen" alt="restore">
                <img onclick="deleteNote(${indexTrashNote}), overlayPrevention(event)" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}

function getNoteOnFocus() {
    return /*html*/`
        <div onclick="overlayPrevention(event)" class="note_on_focus" >
            <p class="note_top"><b>${notesTitles}</b></p>
            <p class="note_middle">${notesContent}</p>
            <div class="note_bottom">
                <div></div>
                <img onclick="closeNoteOnFocus()" src="./assets/icons/close-circle-iconsax-svgrepo-com.svg" title="löschen" alt="delete">
            </div>
        </div>
        `;
}
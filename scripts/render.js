
function renderNotes() {
    let contentRef = document.getElementById('notes_content');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notesContent.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);   
    }
}

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
    
    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotesContent.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);   
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    
    for (let indexTrashNote = 0; indexTrashNote < trashNotesContent.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
    }
}
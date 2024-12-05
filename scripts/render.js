
function renderNotes() {
    archive_content.classList.add('d_none'), headline_archive.classList.add('d_none');
    trash_content.classList.add('d_none'), headline_trash.classList.add('d_none');
    focused_content.classList.add('d_none');
    headline_notes.classList.remove('d_none');
    
    let contentRef = document.getElementById('notes_content');
    contentRef.classList.remove('d_none');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < allNotes.notesContent.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchiveNotes() {
    notes_content.classList.add('d_none'), headline_notes.classList.add('d_none');
    trash_content.classList.add('d_none'), headline_trash.classList.add('d_none');
    focused_content.classList.add('d_none');
    headline_archive.classList.remove('d_none');
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.classList.remove('d_none');
    archiveContentRef.innerHTML = "";
    
    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotesContent.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);   
    }
}

function renderTrashNotes() {
    notes_content.classList.add('d_none'), headline_notes.classList.add('d_none');
    archive_content.classList.add('d_none'), headline_archive.classList.add('d_none');
    focused_content.classList.add('d_none');
    headline_trash.classList.remove('d_none');
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.classList.remove('d_none');
    trashContentRef.innerHTML = "";
    
    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotesContent.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
    }   
}

function renderNoteOnFocus(i) {
    let noteOnFocusContentRef = document.getElementById('focused_content');
    noteOnFocusContentRef.classList.remove('d_none');
    noteOnFocusContentRef.innerHTML = "";
    noteOnFocusContentRef.innerHTML = getNoteOnFocus(i);
}

function renderArchiveOnFocus(i) {
    let archiveOnFocusContentRef = document.getElementById('focused_content');
    archiveOnFocusContentRef.classList.remove('d_none');
    archiveOnFocusContentRef.innerHTML = "";
    archiveOnFocusContentRef.innerHTML = getArchiveOnFocus(i);
}

function renderTrashOnFocus(i) {
    let trashOnFocusContentRef = document.getElementById('focused_content');
    trashOnFocusContentRef.classList.remove('d_none');
    trashOnFocusContentRef.innerHTML = "";
    trashOnFocusContentRef.innerHTML = getTrashOnFocus(i);
}

function closeFocusedContent() {
    focused_content.classList.add('d_none');
}



function renderNotes(indexNote) {
    archive_content.classList.add('d_none'), headline_archive.classList.add('d_none');
    trash_content.classList.add('d_none'), headline_trash.classList.add('d_none');
    note_on_focus_content.classList.add('d_none');
    headline_notes.classList.remove('d_none');
    
    let contentRef = document.getElementById('notes_content');
    contentRef.classList.remove('d_none');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notesContent.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
    console.log(indexNote);
    
}

function renderArchiveNotes() {
    notes_content.classList.add('d_none'), headline_notes.classList.add('d_none');
    trash_content.classList.add('d_none'), headline_trash.classList.add('d_none');
    note_on_focus_content.classList.add('d_none');
    headline_archive.classList.remove('d_none');
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.classList.remove('d_none');
    archiveContentRef.innerHTML = "";
    
    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotesContent.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);   
    }
}

function renderTrashNotes() {
    notes_content.classList.add('d_none'), headline_notes.classList.add('d_none');
    archive_content.classList.add('d_none'), headline_archive.classList.add('d_none');
    note_on_focus_content.classList.add('d_none');
    headline_trash.classList.remove('d_none');
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.classList.remove('d_none');
    trashContentRef.innerHTML = "";
    
    for (let indexTrashNote = 0; indexTrashNote < trashNotesContent.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
    }   
}

function renderNoteOnFocus() {
    let noteOnFocusContentRef = document.getElementById('note_on_focus_content');
    noteOnFocusContentRef.classList.remove('d_none');
    noteOnFocusContentRef.innerHTML = "";
    noteOnFocusContentRef.innerHTML = getNoteOnFocus();
}

function closeNoteOnFocus() {
    note_on_focus_content.classList.add('d_none');
}


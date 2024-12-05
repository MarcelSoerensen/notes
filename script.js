
let allNotes = {
    'notesTitles': [],
    'notesContent': [],
    'archiveNotesTitles': [],
    'archiveNotesContent': [],
    'trashNotesTitles': [],
    'trashNotesContent': []
}
getNotesFromLocalStorage();
getArchiveFromLocalStorage();
getTrashFromLocalStorage();

function addNote() {
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteContentInputRef = document.getElementById('note_content_input');
    
    if (noteTitleInputRef.value && noteContentInputRef.value != "") {
        allNotes.notesTitles.push(noteTitleInputRef.value);
        allNotes.notesContent.push(noteContentInputRef.value);
    }
    
    saveAsLocalStorage();
    renderNotes();
    noteTitleInputRef.value = "";
    noteContentInputRef.value  = "";
}

function pushNoteToArchive(indexNote) {
    let archiveNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
    allNotes.archiveNotesTitles.push(archiveNoteTitle[0]);
    let archiveNote = allNotes.notesContent.splice(indexNote, 1);
    allNotes.archiveNotesContent.push(archiveNote[0]);
    saveAsLocalStorage();
    renderNotes();
}

function pushNoteFromNotesToTrash(indexNote) {
    let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
    allNotes.trashNotesTitles.push(trashNoteTitle[0]);
    let trashNote = allNotes.notesContent.splice(indexNote, 1);
    allNotes.trashNotesContent.push(trashNote[0]);
    saveAsLocalStorage();
    renderNotes();
}

function pushNoteFromArchiveToTrash(indexArchiveNote) {
    let trashNoteTitle = allNotes.archiveNotesTitles.splice(indexArchiveNote, 1);
    allNotes.trashNotesTitles.push(trashNoteTitle[0]);
    let trashNote = allNotes.archiveNotesContent.splice(indexArchiveNote, 1);
    allNotes.trashNotesContent.push(trashNote[0]);
    saveAsLocalStorage();
    renderArchiveNotes();
}

function restoreNoteFromArchive(indexArchiveNote) {
    let restoreNoteTitle = allNotes.archiveNotesTitles.splice(indexArchiveNote, 1);
    allNotes.notesTitles.push(restoreNoteTitle[0]);
    let restoreNoteContent = allNotes.archiveNotesContent.splice(indexArchiveNote, 1);
    allNotes.notesContent.push(restoreNoteContent[0]);
    saveAsLocalStorage();
    renderArchiveNotes();    
}

function restoreNoteFromTrash(indexTrashNote) {
    let restoreNoteTitle = allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.notesTitles.push(restoreNoteTitle[0]);
    let restoreNoteContent = allNotes.trashNotesContent.splice(indexTrashNote, 1);
    allNotes.notesContent.push(restoreNoteContent[0]);
    saveAsLocalStorage();
    renderTrashNotes();    
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotesTitles.splice(indexTrashNote, 1)
    allNotes.trashNotesContent.splice(indexTrashNote, 1);
    saveAsLocalStorage();
    renderTrashNotes();
}

function toggleRespMenu(){
    document.getElementById("resp_menu").classList.toggle('resp_menu_closed');  
}

function overlayPrevention(event) {
    event.stopPropagation();
}

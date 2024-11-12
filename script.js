
let notesTitles = [];
let notesContent = [];

let archiveNotesTitles = [];
let archiveNotesContent = [];

let trashNotesTitles = [];
let trashNotesContent = [];

getNotesFromLocalStorage();
getArchiveFromLocalStorage();
getTrashFromLocalStorage();

function addNote() {
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteContentInputRef = document.getElementById('note_content_input');
    
    if (noteTitleInputRef.value && noteContentInputRef.value != "") {
        notesTitles.push(noteTitleInputRef.value);
        notesContent.push(noteContentInputRef.value);
    }
    
    saveAsLocalStorage();
    renderNotes();
    noteTitleInputRef.value = "";
    noteContentInputRef.value  = "";
}

function pushNoteToArchive(indexNote) {
    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle[0]);
    let archiveNote = notesContent.splice(indexNote, 1);
    archiveNotesContent.push(archiveNote[0]);
    saveAsLocalStorage();
    renderNotes();
    renderArchiveNotes();
}

function pushNoteFromNotesToTrash(indexNote) {
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    let trashNote = notesContent.splice(indexNote, 1);
    trashNotesContent.push(trashNote[0]);
    saveAsLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function pushNoteFromArchiveToTrash(indexArchiveNote) {
    let trashNoteTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    let trashNote = archiveNotesContent.splice(indexArchiveNote, 1);
    trashNotesContent.push(trashNote[0]);
    saveAsLocalStorage();
    renderArchiveNotes();
    renderTrashNotes();
}

function restoreNoteFromArchive(indexArchiveNote) {
    let restoreNoteTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
    notesTitles.push(restoreNoteTitle[0]);
    let restoreNoteContent = archiveNotesContent.splice(indexArchiveNote, 1);
    notesContent.push(restoreNoteContent[0]);
    saveAsLocalStorage();
    renderNotes();
    renderArchiveNotes();    
}

function restoreNoteFromTrash(indexTrashNote) {
    let restoreNoteTitle = trashNotesTitles.splice(indexTrashNote, 1);
    notesTitles.push(restoreNoteTitle[0]);
    let restoreNoteContent = trashNotesContent.splice(indexTrashNote, 1);
    notesContent.push(restoreNoteContent[0]);
    saveAsLocalStorage();
    renderNotes();
    renderTrashNotes();    
}

function deleteNote(indexTrashNote) {
    trashNotesTitles.splice(indexTrashNote, 1)
    trashNotesContent.splice(indexTrashNote, 1);
    saveAsLocalStorage();
    renderTrashNotes();
}



function saveAsLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("notesContent", JSON.stringify(allNotes.notesContent));
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("trashNotesContent", JSON.stringify(allNotes.trashNotesContent));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(allNotes.archiveNotesTitles));
    localStorage.setItem("archiveNotesContent", JSON.stringify(allNotes.archiveNotesContent));
}

function getNotesFromLocalStorage() {
    let notesTitlesArray = JSON.parse(localStorage.getItem("notesTitles"));
    let notesContentArray = JSON.parse(localStorage.getItem("notesContent"));
    
    if (notesTitlesArray && notesContentArray != "") {
        allNotes.notesTitles = notesTitlesArray;
        allNotes.notesContent = notesContentArray;
    }   
}

function getArchiveFromLocalStorage() {
    let archiveNotesTitlesArray = JSON.parse(localStorage.getItem("archiveNotesTitles"));
    let archiveNotesContentArray = JSON.parse(localStorage.getItem("archiveNotesContent"));

    if (archiveNotesTitlesArray && archiveNotesContentArray !="") {
        allNotes.archiveNotesTitles = archiveNotesTitlesArray;
        allNotes.archiveNotesContent = archiveNotesContentArray;
    }
}

function getTrashFromLocalStorage() {
    let trashNotesTitlesArray = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let trashNotesContentArray = JSON.parse(localStorage.getItem("trashNotesContent"));
    
    if (trashNotesTitlesArray && trashNotesContentArray != "") {
        allNotes.trashNotesTitles = trashNotesTitlesArray;
        allNotes.trashNotesContent = trashNotesContentArray;
    }
}
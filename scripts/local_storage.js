
function saveAsLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(allNotes.archiveNotesTitles));
    localStorage.setItem("archiveNotes", JSON.stringify(allNotes.archiveNotes));
}

function getNotesFromLocalStorage() {
    let notesTitlesArray = JSON.parse(localStorage.getItem("notesTitles"));
    let notesArray = JSON.parse(localStorage.getItem("notes"));
    
    if (notesTitlesArray && notesArray != "") {
        allNotes.notesTitles = notesTitlesArray;
        allNotes.notes = notesArray;
    }   
}

function getArchiveFromLocalStorage() {
    let archiveNotesTitlesArray = JSON.parse(localStorage.getItem("archiveNotesTitles"));
    let archiveNotesArray = JSON.parse(localStorage.getItem("archiveNotes"));

    if (archiveNotesTitlesArray && archiveNotesArray !="") {
        allNotes.archiveNotesTitles = archiveNotesTitlesArray;
        allNotes.archiveNotes = archiveNotesArray;
    }
}

function getTrashFromLocalStorage() {
    let trashNotesTitlesArray = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let trashNotesArray = JSON.parse(localStorage.getItem("trashNotes"));
    
    if (trashNotesTitlesArray && trashNotesArray != "") {
        allNotes.trashNotesTitles = trashNotesTitlesArray;
        allNotes.trashNotes = trashNotesArray;
    }
}
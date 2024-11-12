
function saveAsLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notesContent", JSON.stringify(notesContent));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotesContent", JSON.stringify(trashNotesContent));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(archiveNotesTitles));
    localStorage.setItem("archiveNotesContent", JSON.stringify(archiveNotesContent));
}

function getNotesFromLocalStorage() {
    let notesTitlesArray = JSON.parse(localStorage.getItem("notesTitles"));
    let notesContentArray = JSON.parse(localStorage.getItem("notesContent"));
    
    if (notesTitlesArray && notesContentArray != "") {
        notesTitles = notesTitlesArray;
        notesContent = notesContentArray;
    }   
}

function getArchiveFromLocalStorage() {
    let archiveNotesTitlesArray = JSON.parse(localStorage.getItem("archiveNotesTitles"));
    let archiveNotesContentArray = JSON.parse(localStorage.getItem("archiveNotesContent"));

    if (archiveNotesTitlesArray && archiveNotesContentArray !="") {
        archiveNotesTitles = archiveNotesTitlesArray;
        archiveNotesContent = archiveNotesContentArray;
    }
}

function getTrashFromLocalStorage() {
    let trashNotesTitlesArray = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let trashNotesContentArray = JSON.parse(localStorage.getItem("trashNotesContent"));
    
    if (trashNotesTitlesArray && trashNotesContentArray != "") {
        trashNotesTitles = trashNotesTitlesArray;
        trashNotesContent = trashNotesContentArray;
    }
}
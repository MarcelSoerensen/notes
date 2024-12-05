
let allNotes = {
    'notesTitles': [],
    'notes': [],
    'archiveNotesTitles': [],
    'archiveNotes': [],
    'trashNotesTitles': [],
    'trashNotes': []
}
getNotesFromLocalStorage();
getArchiveFromLocalStorage();
getTrashFromLocalStorage();

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);  
    
    saveAsLocalStorage();  
    renderNotes();   
}

function addNote() {
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteInputRef = document.getElementById('note_content_input');
    
    if (noteTitleInputRef.value && noteInputRef.value != "") {
        allNotes.notesTitles.push(noteTitleInputRef.value);
        allNotes.notes.push(noteInputRef.value);
    }
    
    saveAsLocalStorage();
    renderNotes();
    noteTitleInputRef.value = "";
    noteInputRef.value  = "";
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotesTitles.splice(indexTrashNote, 1)
    allNotes.trashNotes.splice(indexTrashNote, 1);
    saveAsLocalStorage();
    renderTrashNotes();
}

function toggleRespMenu(){
    document.getElementById("resp_menu").classList.toggle('resp_menu_closed');  
}

function overlayPrevention(event) {
    event.stopPropagation();
}

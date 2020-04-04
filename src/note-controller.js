function NoteListController() {
  this.notelist = new NoteList();
  // Since NoteList is an empty array we can push strings into it.
  this.notelist.addNotes("Favourite drink: seltzer")
  // Creating a listlist view, passing in notelist as a parameter.
  this.notelistview = new NoteListView(this.notelist);
};

NoteListController.prototype.returnHTMLNotes = function() {
  console.log(this.notelist)
  return this.notelistview.HTMLConvertor() 
};

NoteListController.prototype.listenForTextForm = function() {
  document.getElementById("text").addEventListener("submit", () => {
      value = document.getElementById('input').value
      console.log(this.notelist)
      this.notelist.addNotes(value)
      this.notelistview = new NoteListView(this.notelist);
      // this.outputToHTML();
      event.preventDefault()
    });
};

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(id) {
  var note_id = Number(id)
  var note = notelistcontroller.notelist._list.find(note => note._id === note_id) 
  var singlenoteview = new singleNoteView(note)

  document.getElementById("App")
  .innerHTML = singlenoteview.returnHTMLString()
};

// When using .this we need to use prototype 
// function listenForTextForm() {

const greeting = document.getElementById("App")
var notelistcontroller = new NoteListController();
greeting.innerHTML = notelistcontroller.returnHTMLNotes();

notelistcontroller.listenForTextForm();
makeUrlChangeShowNoteForCurrentPage();


 

  
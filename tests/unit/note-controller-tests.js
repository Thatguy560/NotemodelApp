function instantiatedNoteListContollerAsArray() {
  var notelistontroller = new NoteListController()
  assert.isTrue(notelistontroller.notelist._list.length !== 0, "Checking Array isn't empty")  
};

function checkNoteListControllerContainsfirst20charactersHTML() {
  var notelistontroller = new NoteListController()
  var checkgreeting = document.getElementById("App")
  greeting.innerHTML = notelistontroller.returnHTMLNotes()
  // Checking the element with the App id matches the given string.
  // Returns first 20 characters of string we've iterated through.
  assert.isTrue(document.getElementById("App").innerHTML === `<ul><li><div><a href="#0">Favourite drink: sel</a></div></li></ul>`, "Checking HTML string matches")
  // innerHTML what is written between the tags in the HTML, in this
  // case we're setting the value equal to a given string.
};

instantiatedNoteListContollerAsArray();
checkNoteListControllerContainsfirst20charactersHTML(); 




function instantiatesListAsArray() {
var notelist = new NoteList();
// Refers to the the empty array and checks the length is 0.
assert.isTrue(notelist._list.length === 0, "Name Array");
};
// This new instantiated array will be 0 as we haven't pushed
// anything into it yet. 

function addsNotesToArray() {
  var notelist = new NoteList();
  notelist.addNotes("Test note");
  // pushing note into list, our array would look like this 
  // [Test note], checking the first element of array returns this string.
  assert.isTrue(notelist._list[0]._note === "Test note", "pushing text into list array")
};

function checkNotesArray() {
  // Creates a new instance of notelist where we can push notes into an empty array.
  var notelist = new NoteList();
  notelist.addNotes("Test note 2")
  // console.log(notelist)
  var noteCheck = notelist.checkNotes();
  // Checks the first note we pass in to the notelist equals this string.
  assert.isTrue(noteCheck[0]._note === "Test note 2", "Checking notes have been added to the array")
};

function findNoteById() {
  var notelist = new NoteList();
  // Create a new instance of NoteList 
  notelist.addNotes("Some text")
  // we create a new note by adding some text to an empty array with the adds note method.
  var note = notelist._list.find(note => note._id === 0)
  // Since this is our first note, this will be indexed at one?
  assert.isTrue(note._note === "Some text", "Checking note can be found via ID")
  // We then check that this note will equal the text we've passed in.
} 

instantiatesListAsArray();
addsNotesToArray();
checkNotesArray();
findNoteById();

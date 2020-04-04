function CheckingInstanceReceivesNotelist() {
  // Same as note-list tests, create new instance of notelist first
  // and then create a new NoteListView so we can push notelist into it.
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview._notelist._list.length === 0, "Note List View Array")
};

function addsHTMLToArray() {
  // Push notes into notelist array so we can then add notelist notes
  // into NoteListView Array.
  var notelist = new NoteList();
  notelist.addNotes("Testing array");
  // Since this is a notelistview we create a new instance of notelist and
  // we push notes into the notelistview
  var notelistview = new NoteListView(notelist);
  var HTMLoutput = notelistview.HTMLConvertor();
  assert.isTrue(HTMLoutput === "<ul><li><div><a href=#0>Testing array</a></div></li></ul>", "Testing Adding HTML as a string to array")
}

function checksIfArrayHasNoNotes() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  var HTMLoutput = notelistview.HTMLConvertor();
  assert.isTrue(HTMLoutput === "No Notes", "Testing 0 notes in HTML output")
}

CheckingInstanceReceivesNotelist();
addsHTMLToArray();
checksIfArrayHasNoNotes();

  

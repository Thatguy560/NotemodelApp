function instantiatesTextInNote() {
  var note = new Note("This is a text note");
  assert.isTrue(note._note === "This is a text note", "Text note");
};

function testNoteReturnsText() {
  // We create a new instance of note and pass this text in as 
  // an argument. ReturnNote method returns the text we've passed in.
  var note = new Note("Returning text note");
  var noteText = note.returnNote();
  assert.isTrue(noteText === "Returning text note", "Returning Text Note")
};

instantiatesTextInNote();
testNoteReturnsText();








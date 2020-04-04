function instantiatesSingleNoteViewAsText() {
  var note = new Note("text")
  var singlenoteview = new singleNoteView(note) 
  // We create a new instance of note and we pass in "text" as a parameter.
  // Which we then pass into a new instance of singleNoteView.
  assert.isTrue(singlenoteview.returnHTMLString() === "<div>" + note._note + "</div>", "Testing single note with Div tags")
};

instantiatesSingleNoteViewAsText()
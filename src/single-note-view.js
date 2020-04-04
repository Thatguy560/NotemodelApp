function singleNoteView(note) {
  this.note = note
};

singleNoteView.prototype.returnHTMLString = function() {
  return "<div>" + this.note._note + "</div>"
};
  

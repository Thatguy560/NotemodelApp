function NoteList() { 
  this._list = []; 
};

NoteList.prototype = (function() {
  function addNotes(text) {
    // Checking that when we instantiate a new note
    // the id is equal to 0 before we push a new note into it.
    var id = this._list.length
    // Currently this is just an empty arrat so we'll push a new note with a unique ID into it.
    this._list.push(new Note(text, id));
  }; 
  function checkNotes() {
    // console.log(this._list)
    return this._list
  };
  return {
    addNotes: addNotes, checkNotes: checkNotes
  }
})();



function NoteListView(notelist) {
  this._notelist = notelist
};

NoteListView.prototype = (function() {
  function HTMLConvertor() {
    // if (this._notelist._list.length === 0) {
    // return "No Notes"
    // } else { 
      // We put the ">" to the end the tag at the end of the string interpolation.
    var HTMLArray = this._notelist._list.map(note => note._id 
      + ">" + note._note.slice(0,20)) 
    return "<ul><li><div><a href=#" + HTMLArray.join
    ("</a></div></li><li><div><a href=#") + "</a></div></li></ul>"
  };
   return {
    HTMLConvertor: HTMLConvertor 
   }   
})();


 



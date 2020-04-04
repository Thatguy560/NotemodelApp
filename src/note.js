// Whatever text we pass in an as argument, ._note will be 
// equal to the text we pass in, Same with the id, every id we pass
// in equals _id. _ denotes private method that shouldn't be changed.
function Note(text, id) {
  this._note = text;
  this._id = id 
}; 

// returnNote is a method which returns this._note (or text we've 
// passed in as an argument.)
Note.prototype = (function() {
  function returnNote() {
    // console.log(this._note)
    return this._note
    // noteText = this._note (with returnNote method called on it.)
  };
  return { 
    returnNote: returnNote 
  }
})(); 
 
// This return means we can call this method outside of the 
// module, meaning this is a public method.


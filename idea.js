class Idea {
  constructor(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = 'Swill';
  
  }

  saveToStorage(pants) {
    var stringified = JSON.stringify(pants);
    localStorage.setItem("stringifiedIdeas", stringified);
  }

  deleteFromStorage(shirts) {
    var card = ideas.find(function(oneIdea) {
      return oneIdea.id === shirts;
    });
    var index = ideas.indexOf(card);
    ideas.splice(index, 1);
    this.saveToStorage(ideas);
  }


  updateContent(newText, check) {
    if (check) {
      this.title = newText;
    } else {
      this.body = newText;
    }

    this.saveToStorage(ideas);
  }
// upateContent() - identify unique ID of card
// upateContent() - create new instance while keeping the same unique ID
// (reminder: doesn’t need to be in same spot in array)
// upateContent() - Stringify the new instance of the card (var TKTK = JSON.stringify(argument)
// store the stringified object localStorage.setItem(“newVariableName”, passedArgument) - can I use previously declared functions here?
// send through parsing and re-adding of methods (oldIdeas function)
// have edited idea re-display at the top of the idea list?

  updateQuality() {

  }


}
class Idea {
  constructor(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = 'Quality: Swill';
  
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

  updateQuality(check) {
    console.log('yes mark it does')
    if (check) {
      this.quality = 'Plausible'; 
    }
    this.saveToStorage(ideas);
  }
 // currentVote === 'Quality: Swill';

}
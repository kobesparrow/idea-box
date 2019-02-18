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

  updateQuality() {
     // var currentVote = event.target.nextSibling.nextSibling.firstChild.nextSibling;
     var upBtn = event.target.className.includes('up-vote') ? this.increaseQuality() : this.diminishQuality();
     // var downBtn = event.target.className.includes('down-vote')
     // console.log(currentVote)

  }

  increaseQuality() {
    if(this.quality === 'Swill') {
      this.quality = 'Plausible';
    } else if (this.quality === 'Plausible') {
      this.quality = 'Genius';
    }
    // currentVote.innerText = this.quality;
    this.saveToStorage(ideas);
  }

  diminishQuality() {
    if(this.quality === 'Genius') {
      this.quality = 'Plausible';
    } else if (this.quality === 'Plausible') {
      this.quality = 'Swill';
    }
    // currentVote.innerText = this.quality;
    this.saveToStorage(ideas);
  }
}
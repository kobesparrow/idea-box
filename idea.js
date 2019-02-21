class Idea {
  constructor(title, body, id, quality) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = quality || 'Swill';
  
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
    check ? this.title = newText : this.body = newText;
    this.saveToStorage(ideas);
  }

  updateQuality() {
      event.target.className.includes('up-vote') ? this.increaseQuality() : this.diminishQuality();
  }

  increaseQuality() {
    if(this.quality === 'Swill') {
      this.quality = 'Plausible';
    } else if (this.quality === 'Plausible') {
      this.quality = 'Genius';
    }
    this.saveToStorage(ideas);
  }

  diminishQuality() {
    if(this.quality === 'Genius') {
      this.quality = 'Plausible';
    } else if (this.quality === 'Plausible') {
      this.quality = 'Swill';
    }
    this.saveToStorage(ideas);
  }
}
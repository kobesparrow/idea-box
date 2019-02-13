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
    // console.log(stringified);
  }

  displayIdeas() {
    var storedIdeas = localStorage.getItem("stringifiedIdeas");
    var parsedIdeas = JSON.parse(storedIdeas);
    console.log(parsedIdeas)
  }


  deleteFromStorage() {

  }


  updateContent() {

  }


  updateQuality() {

  }


}
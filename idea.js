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


    // get the item we want to delete from the array
    // idea.id
    // dive into the array
    // compare DOM selected card to data attribute (data-id)
    // once compared, have what we want - time to delete from localStorage
    // localStorage.removeItem("data-id")
    // re-assign the idea array
    // var newIdeas = localStorage.getItem("stringifiedIdeas")
  }


  updateContent() {

  }


  updateQuality() {

  }


}
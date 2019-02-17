// -----------------GLOBAL VARIABLES-------------------------

var saveBtn = document.querySelector('.form-btn');
var searchBtn = document.querySelector('.fa-search');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardArea = document.querySelector('.card-area');
var searchInput = document.querySelector('.search-input');
var cardContainer = document.querySelector('.card-area');

var ideas = JSON.parse(localStorage.getItem('stringifiedIdeas')) || []; 




// ----------------EVENT LISTENERS---------------------------

window.addEventListener('load', onLoad(ideas));
saveBtn.addEventListener('click', newCard);
cardArea.addEventListener('click', deleteCard);
// cardArea.addEventListener('keydown', saveCardAgain);
cardArea.addEventListener('click', upVote);
// cardArea.addEventListener('click', downVote);
// cardArea.addEventListener('focusout', saveCardAgain);
searchBtn.addEventListener('click', filterText);
searchInput.addEventListener('keyup', filterText);
cardArea.addEventListener('keydown', saveOnReturn);


// ----------------FUNCTIONS---------------------------------

function onLoad(oldIdeas) {
  ideas = [];
  oldIdeas.forEach(function(idea){
    var newObject = new Idea(idea.title, idea.body, idea.id);
    ideas.push(newObject);
    generateIdeaCard(idea);
    // console.log(newObject)
  });
}

function newCard(e) {
  e.preventDefault();
  var newObject = new Idea(title.value, body.value, Date.now());
    ideas.push(newObject);
    newObject.saveToStorage(ideas);
    generateIdeaCard(newObject);
    title.value = '';
    body.value = '';
}


function generateIdeaCard(newObject) {
  var card = `
    <article class="idea-card" data-id=${newObject.id}>
      <h2 class="card-title" contenteditable>${newObject.title}</h2>
      <p class="card-body" contenteditable>${newObject.body}</p>
      <footer class="card-footer">
        <div class="card-footer-left-buttons">
          <input type="image" class="down-vote btns" src="assets/downvote.svg">
          <input type="image" class="up-vote btns" src="assets/upvote.svg"> 
          <h4 class="card-quality">Quality: <span class="vote">${newObject.quality}</span></h4>
        </div>
        <input type="image" class="btns dlt-btn" src="assets/delete.svg">
      </footer>
    </article>
    `
    cardContainer.insertAdjacentHTML('afterbegin', card);
}

function deleteCard(event) { 
  var cardId = parseInt(event.target.parentElement.parentElement.dataset.id);
  if (event.target.className.includes('dlt-btn')) {
    event.target.parentElement.parentElement.remove();
    ideas[0].deleteFromStorage(cardId);
  }
}


function removeAllCards() {
  cardContainer.innerHTML = '';
}

function filterText() {
  removeAllCards();
  var searchValue = searchInput.value;
  var filteredIdeas = ideas.filter(function(shoes) {
    return shoes.title.toLowerCase().includes(searchValue) || shoes.body.toLowerCase().includes(searchValue); 
  }); 
  filteredIdeas.forEach(function(shoes) {
  generateIdeaCard(shoes);
  });
}

function saveOnReturn(event) {
  if (event.keyCode === 13) {
    saveCardAgain(event);  
  }
}

function saveCardAgain(event) {
  var cardId = parseInt(event.target.parentElement.dataset.id);
  var cardText = event.target.innerText;
  var check = event.target.classList.contains('card-title');
  // note to self KAYLA!! make this its own function
  // if (event.keyCode === 13) {
    ideas.forEach(function (idea) {
      if(idea.id === cardId) {
        idea.updateContent(cardText, check);
      } 
    });
  // }
}

function upVote() {
 var cardId = parseInt(event.target.parentElement.parentElement.parentElement.dataset.id);
 var currentVote = event.target.nextSibling.nextSibling.firstChild.nextSibling.innerText;
    ideas.forEach(function (idea) {
      if(idea.id === cardId) {
        idea.updateQuality(currentVote);
      }
  })

}

function downVote() {
 var cardId = parseInt(event.target.parentElement.parentElement.parentElement.dataset.id);
 var currentVote = event.target.nextSibling;
 console.log(currentVote);

}














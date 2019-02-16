// -----------------GLOBAL VARIABLES-------------------------

var saveBtn = document.querySelector('.form-btn');
var searchBtn = document.querySelector('.fa-search');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardArea = document.querySelector('.card-area');
var searchInput = document.querySelector('.search-input');
var cardContainer = document.querySelector('.card-area');
var cardTitle = document.querySelector('.card-title');
var cardBody = document.querySelector('.card-body');



var ideas = JSON.parse(localStorage.getItem('stringifiedIdeas')) || []; 




// ----------------EVENT LISTENERS---------------------------

window.addEventListener('load', onLoad(ideas));
saveBtn.addEventListener('click', newCard);
cardArea.addEventListener('click', deleteCard);

cardArea.addEventListener('keydown', saveCardAgain);

searchBtn.addEventListener('click', filterText);
searchInput.addEventListener('keyup', filterText);


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
          <input type="image" class="btns" src="assets/downvote.svg">
          <input type="image" class="btns" src="assets/upvote.svg"> 
          <h4 class="card-quality">Quality: ${newObject.quality}</h4>
        </div>
        <input type="image" class="btns dlt-btn" src="assets/delete.svg">
      </footer>
    </article>
    `
    cardContainer.insertAdjacentHTML('afterbegin', card);
}

function deleteCard(event) { 
  var cardID = parseInt(event.target.parentElement.parentElement.dataset.id);
  if (event.target.className.includes('dlt-btn')) {
    event.target.parentElement.parentElement.remove();
    ideas[0].deleteFromStorage(cardID);
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

function saveCardAgain(event) {

    if (event.keyCode === 13) {
  alert('YEs');
}
}

function saveOnReturn(e) {
  var cardTitle = e.target.closest('.card-container').firstChild.nextElementSibling.innerText;
  var cardBody = e.target.closest('.card-container').firstChild.nextElementSibling.nextElementSibling.innerText;
  var cardId = parseInt(e.target.closest('.card-container').getAttribute('id'));
  if(e.keyCode === 13) {
    cardArray.forEach(function (card) {
      if(card.id === cardId) {
        card.updateContent(cardTitle, cardBody, cardArray);
      }
    });
  }
}

// Create event listener for keyboard enter/return AND click anywhere on page
// event listener triggers the function: saveCardAgain
// write function for SaveCardAgain(event):
// saveCardAgain - invoke updateContent() in idea.js
// upateContent() - identify unique ID of card
// upateContent() - create new instance while keeping the same unique ID
// (reminder: doesn’t need to be in same spot in array)





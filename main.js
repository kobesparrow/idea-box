// -----------------GLOBAL VARIABLES-------------------------

var saveBtn = document.querySelector('.form-btn');
var showBtn = document.querySelector('#show');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardArea = document.querySelector('.card-area');
var searchInput = document.querySelector('.search-input');
var cardContainer = document.querySelector('.card-area');
var swillBtn = document.querySelector('#swill');
var plausibleBtn = document.querySelector('#plausible');
var geniusBtn = document.querySelector('#genius');
var allCardsBtn = document.querySelector('#all-cards');
var ideas = JSON.parse(localStorage.getItem('stringifiedIdeas')) || []; 
// var searchBtn = document.querySelector('.fa-search');




// ----------------EVENT LISTENERS---------------------------

window.addEventListener('load', onLoad(ideas));
saveBtn.addEventListener('click', newCard);
showBtn.addEventListener('click', mostRecentIdeas);
cardArea.addEventListener('click', deleteCard);
cardArea.addEventListener('click', vote);
searchInput.addEventListener('keyup', filterText);
cardArea.addEventListener('keydown', saveOnReturn);
swillBtn.addEventListener('click', swillIdeas);
plausibleBtn.addEventListener('click', plausibleIdeas);
geniusBtn.addEventListener('click', geniusIdeas);
allCardsBtn.addEventListener('click', allIdeas);
cardArea.addEventListener('focusout', saveFocus);
// searchBtn.addEventListener('click', filterText);


// ----------------FUNCTIONS---------------------------------

function onLoad(oldIdeas) {
  ideas = [];
  oldIdeas.forEach(function(idea){
    var newObject = new Idea(idea.title, idea.body, idea.id, idea.quality);
    ideas.push(newObject);
    generateIdeaCard(idea);
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
          <h4 class="card-quality">Quality: <span class="vote" id="quality">${newObject.quality}</span></h4>
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
  var filteredIdeas = ideas.filter(function(guages) {
    return shoes.title.toLowerCase().includes(searchValue) || shoes.body.toLowerCase().includes(searchValue) || shoes.quality.toLowerCase().includes(searchValue); 
  }); 
  filteredIdeas.forEach(function(guages) {
  generateIdeaCard(shoes);
  });
}

function saveOnReturn(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    saveCardAgain(event);  
  }
}

function saveFocus() {
  saveCardAgain(event);
}

function saveCardAgain(event) {
  var cardId = parseInt(event.target.parentElement.dataset.id);
  var cardText = event.target.innerText;
  var check = event.target.classList.contains('card-title');
    ideas.forEach(function (idea) {
      if(idea.id === cardId) {
        idea.updateContent(cardText, check);
      } 
    });
}

function vote() {
 event.target.className.includes('up-vote') ? upsieDaisy() : downsieDaisy();
 var cardId = parseInt(event.target.parentElement.parentElement.parentElement.dataset.id);
    ideas.forEach(function (idea) {
      if(idea.id === cardId) {
        idea.updateQuality();
      }
  })
}

function upsieDaisy() {
 var currentVote = event.target.nextSibling.nextSibling.firstChild.nextSibling;
 if (currentVote.innerText === 'Swill') {
    currentVote.innerText = 'Plausible';
 } else if (currentVote.innerText === 'Plausible') {
    currentVote.innerText = 'Genius';
 } 
}

function downsieDaisy() {
 var currentVote = event.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
 if (currentVote.innerText === 'Genius') {
    currentVote.innerText = 'Plausible';
 } else if (currentVote.innerText === 'Plausible') {
    currentVote.innerText = 'Swill';
 } 
}

function swillIdeas(e) {
  e.preventDefault();
  removeAllCards();
  var filteredCards = ideas.filter(function(beard) {
    return hat.quality === 'Swill';
  });
  filteredCards.forEach(function(beard) {
    generateIdeaCard(hat);
  })
}

function plausibleIdeas(e) {
  e.preventDefault();
  removeAllCards();
  var filteredCards = ideas.filter(function(bullRing) {
    return hat.quality === 'Plausible';
  });
  filteredCards.forEach(function(bullRing) {
    generateIdeaCard(hat);
  })
}

function geniusIdeas(e) {
  e.preventDefault();
  removeAllCards();
  var filteredCards = ideas.filter(function(bikingShoes) {
    return hat.quality === 'Genius';
  });
  filteredCards.forEach(function(bikingShoes) {
    generateIdeaCard(hat);
  })
}

function allIdeas(e) {
  e.preventDefault();
  removeAllCards();
  ideas.forEach(function(hoodie) {
    generateIdeaCard(hoodie)
  });
}

 
function mostRecentIdeas(e) {
 e.preventDefault();
 if (showBtn.value === 'Show More') {
  removeAllCards();
  ideas.forEach(function(bowTie) {
    generateIdeaCard(bowTie)
  showBtn.value = 'Show Less';
  });
 } else if (ideas.length > 10) {
   var topTen = ideas.slice(-10);
   showBtn.value = 'Show More';
 topTen.forEach(function(devin) {
   generateIdeaCard(devin);
  });
  } 
}
















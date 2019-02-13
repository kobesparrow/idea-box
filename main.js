// -----------------GLOBAL VARIABLES-------------------------

var cardContainer = document.querySelector('.card-area');
var saveBtn = document.querySelector('.form-btn');

var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');

var ideas = [];




// ----------------EVENT LISTENERS---------------------------

saveBtn.addEventListener('click', newCard);



// ----------------FUNCTIONS---------------------------------

function newCard(e) {
  e.preventDefault();
var newObject = new Idea(title.value, body.value, Date.now());
  generateIdeaCard(newObject);
};


function generateIdeaCard(newObject) {
  // e.preventDefault();
  // var newObject = new Idea(title, body, newObject);
  var card = 
  `<article class="idea-card" data-id=${newObject.id}>
      <h2 class="card-title">${newObject.title}</h2>
      <p class="card-body">${newObject.body}</p>
      <div class="card-footer">
        <div class="card-footer-left-buttons">
          <img src="assets/downvote.svg">
          <img src="assets/upvote.svg"> 
          <h4 class="card-quality">quality</h4>
        </div>
        <img src="assets/delete.svg">
      </div>
    </article>`
    cardContainer.innerHTML += card
};
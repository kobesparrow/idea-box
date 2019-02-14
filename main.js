// -----------------GLOBAL VARIABLES-------------------------

var saveBtn = document.querySelector('.form-btn');

var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');

var ideas = JSON.parse(localStorage.getItem('stringifiedIdeas')) || []; 




// ----------------EVENT LISTENERS---------------------------

saveBtn.addEventListener('click', newCard);
window.addEventListener('load', onLoad);
// document.querySelector('body').addEventListener('keydown', keyCheck);



// ----------------FUNCTIONS---------------------------------

// function keyCheck(e) {
//   console.log(e.key)
// }

function onLoad() {
  ideas.forEach(function(idea){
    generateIdeaCard(idea);
  });
}

function newCard(e) {
  e.preventDefault();
  var newObject = new Idea(title.value, body.value, Date.now());
    ideas.push(newObject);
    // console.log(ideas);
    newObject.saveToStorage(ideas);
    // newObject.displayIdeas();
    generateIdeaCard(newObject);
    title.value = '';
    body.value = '';
};


function generateIdeaCard(newObject) {
  var cardContainer = document.querySelector('.card-area');
  console.log(newObject);
  var card = `
    <article class="idea-card" data-id=${newObject.id}>
      <h2 class="card-title">${newObject.title}</h2>
      <p class="card-body">${newObject.body}</p>
      <div class="card-footer">
        <div class="card-footer-left-buttons">
          <input type="image" class="btns" src="assets/downvote.svg">
          <input type="image" class="btns" src="assets/upvote.svg"> 
          <h4 class="card-quality">Quality: ${newObject.quality}</h4>
        </div>
        <input type="image" class="btns" src="assets/delete.svg">
      </div>
    </article>
    `
    cardContainer.insertAdjacentHTML('afterbegin', card);
};
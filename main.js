// -----------------GLOBAL VARIABLES-------------------------

var cardContainer = document.querySelector('.card-area');
var saveBtn = document.querySelector('.form-btn');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');




// ----------------EVENT LISTENERS---------------------------

saveBtn.addEventListener('click', generateIdeaCard);


// ----------------FUNCTIONS---------------------------------

function generateIdeaCard(e, title, body) {
  e.preventDefault();
  cardContainer.innerHTML =
  `<article class="idea-card">
      <h2 class="card-title">${titleInput.value}</h2>
      <p class="card-body">${bodyInput.value}</p>
      <div class="card-footer">
        <div class="card-footer-left-buttons">
          <img src="assets/downvote.svg">
          <img src="assets/upvote.svg"> 
          <h4 class="card-quality">Quality: Swill</h4>
        </div>
        <img src="assets/delete.svg">
      </div>
    </article>`
};
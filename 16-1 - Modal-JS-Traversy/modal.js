//Get modal

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.querySelector('.closeBtn');

// EVENT LISTENERS
modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

  //window listener
window.addEventListener('click', outsideClick);

//OPEN MODAL FUNCTION
function openModal() {
  modal.style.display = 'block';
}

//CLOSE MODAL FUNCTION
function closeModal() {
  modal.style.display = 'none';
}

//WINDOW CLICK CLOSE FUNCTION
function outsideClick(e) {
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

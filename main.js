// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Hide the error modal
  const errorModal = document.querySelector('#modal');
  errorModal.classList.add('hidden');

  // Step 2: Set up event listener for heart icons
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach((heart) => {
    heart.addEventListener('click', handleHeartClick);
  });
});

// Step 3: Handle click event on heart icons
function handleHeartClick(event) {
  const heart = event.target;
  
  // Step 3.1: Simulate server request
  mimicServerCall()
    .then(() => {
      // Step 3.2: Handle successful response
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    })
    .catch((error) => {
      // Step 3.3: Handle error response
      const errorModal = document.querySelector('#modal');
      const errorMessage = document.querySelector('#modal-message');
      errorModal.classList.remove('hidden');
      errorMessage.textContent = error;

      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

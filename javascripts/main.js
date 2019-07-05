document.addEventListener('DOMContentLoaded', function () {
  bounce();
  document.addEventListener('click', function (event) {
    handleClick(event);
  }, false);

  document.addEventListener('touchstart', function (event) {
    handleClick(event);
  }, false);

});

function handleClick(event) {
  if (!event.target.matches('.solution-letter')) return;
  event.preventDefault();
  const letterClicked = event.target.innerHTML;
  document.getElementById(letterClicked).className = 'solution-letter';
  const idToChange = letterClicked.toUpperCase();
  document.getElementById(idToChange).textContent = letterClicked;
  bounce(letterClicked);
};

let solLetters = ['b', 'a', 'g', 'e', 'l'];
function bounce(letter = '') {
  if (letter) {
    solLetters.splice(solLetters.indexOf(letter), 1);
  }
  let index = Math.floor(Math.random() * solLetters.length);
  let randomLetter = solLetters[index];
  if (solLetters.length > 0) {
    setTimeout(() => {
      const el = document.getElementById(randomLetter);
      el.className += ' bounce';
    }, 7394);
  }
};
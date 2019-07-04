document.addEventListener('DOMContentLoaded', function () {
  bounce();
  document.addEventListener('click', function (event) {
    if (!event.target.matches('.solution-letter')) return;
    event.preventDefault();
    const letterClicked = event.target.innerHTML;
    const idToChange = letterClicked.toUpperCase();
    document.getElementById(idToChange).textContent = letterClicked;
    bounce();
  }, false);

  document.addEventListener('touchstart', function (event) {
    if (!event.target.matches('.solution-letter')) return;
    event.preventDefault();
    const letterClicked = event.target.innerHTML;
    const idToChange = letterClicked.toUpperCase();
    document.getElementById(idToChange).textContent = letterClicked;
  }, false);

  function bounce() {
    const solLetters = ['b', 'a', 'g', 'e', 'l'];
    let index = Math.floor(Math.random() * 5);
    let randomLetter = solLetters[index];
    solLetters.splice(index, 1);
    if (solLetters.length > 0) {
      setTimeout(() => {
        const el = document.getElementById(randomLetter);
        console.log(el);
        el.className += ' bounce';
      }, 7394);
    }
  };
});
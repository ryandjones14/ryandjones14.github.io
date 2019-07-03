document.addEventListener('click', function (event) {
  if (!event.target.matches('.solution-letter')) return;
  event.preventDefault();
  const letterClicked = event.target.innerHTML;
  const idToChange = letterClicked.toUpperCase();
  document.getElementById(idToChange).textContent = letterClicked;
}, false);
function notify(message) {
  let divContainer = document.getElementById('notification');
  divContainer.textContent = message;
  divContainer.style.display = 'block'

  divContainer.addEventListener('click', onClick);


  function onClick(e) {
    e.target.style.display = 'none'
  }
}
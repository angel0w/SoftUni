function notify(message) {
  console.log('todo')
  let divContent = document.getElementById('notification');
  divContent.innerHTML = message;
  
  divContent.style.display = "block";
  
  divContent.addEventListener('click', toogleDispayStyle);
  
  function toogleDispayStyle (e) {
    e.target.style.display = 'none';
  }
}
function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      div.appendChild(p);

      p.style.display = 'none';
      
      div.addEventListener('click', (e) => {
         e.currentTarget.children[0].style.display = '';
      })
      
      content.appendChild(div);
   }
}
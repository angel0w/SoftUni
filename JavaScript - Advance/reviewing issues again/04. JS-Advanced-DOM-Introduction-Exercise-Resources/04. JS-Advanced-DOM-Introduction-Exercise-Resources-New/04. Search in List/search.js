function search() {
   // TODO
   let text = document.getElementById('searchText').value
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let counter = 0;

   for (let town of townsElement) {   

      if(town.textContent.includes(text) && text !== ''){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${counter} matches found`;
}
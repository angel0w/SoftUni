function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let inputInfo = document.getElementById('searchField')



      for(let i = 0; i < rows.length; i++){
         console.log(rows[i]);
         rows[i].classList.remove('select')
         if (rows[i].textContent.includes(inputInfo.value) &&  inputInfo.value !== '') {
            rows[i].classList.add('select')
         }
      }
      inputInfo.value = ''
   }
   
}
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvg = 0;
      let bestName = '';
      let output = {};


      for (let inputELe of input) {
         let restorantInfo = inputELe.split(' - ');
         let restorantName = restorantInfo.shift();
         let workersData = restorantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restorantName)) {
               output[restorantName] = {};
            }
            if (output.hasOwnProperty(restorantName)){
               output[restorantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);
      
      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);
         
         for (const [name, salary] of values) {
               totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currentAvg ) {
            currentAvg = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);

      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvg.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      
      document.querySelector('#workers p').textContent = print;
   }
}

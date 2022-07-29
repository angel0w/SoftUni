// function test(data) {

//     let totalSum = 0;
//     console.log('Bought furniture:');

//     for (let line of data) {
//         let regex = /[>]{2}(?<furniture>[A-Za-z]+)[<]{2}(?<price>\d+(.\d+)?)!(?<quantity>\d+)/gm;
//         if (line === 'Purchase') {
//             break;
//         }

//         let match = regex.exec(line);
//         if (match) {
//             console.log(match.groups.furniture);
//             totalSum += +match.groups.price * +match.groups.quantity;
//         }
//     }

//     console.log(`Total money spend: ${totalSum.toFixed(2)}`);
// }
// test([
// '>>Sofa<<312.23!3',
// '>>TV<<300!5',
// '>Invalid<<!5',
// 'Purchase']);
// console.log('~~~~~~~~~~~');
// test([
// '>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function race(data) {

//     let racers = data.shift().split(", ");
//     let obj = {};

//     for (let line of data) {
//       if (line === 'end of race') {
//         break;
//       }

//       let name = line.match(/[A-Z]+/gi).join("");
//       let distanceInDigits = line.match(/\d/gi);
//       let distance = 0;

//       for (let meter of distanceInDigits) {
//         distance += Number(meter);
//       }

//       if (racers.includes(name)) {
//         if (!obj.hasOwnProperty(name)) {
//           obj[name] = distance;
//         } else {
//           obj[name] += distance;
//         }
//       }
//     }

//     let sortedArr = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
//     console.log(`1st place: ${sortedArr[0]}\n2nd place: ${sortedArr[1]}\n3rd place: ${sortedArr[2]}`);

// }
// race([
//   "George, Peter, Bill, Tom",
//   "G4e@55or%6g6!68e!!@ ",
//   "R1@!3a$y4456@",
//   "B5@i@#123ll",
//   "G@e54o$r6ge#",
//   "7P%et^#e5346r",
//   "T$o553m&6",
//   "end of race",
// ]);
// console.log("~~~~~~~~~");
// race([
//   "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
//   "Mi*&^%$ch123o!#$%#nne787) ",
//   "%$$B(*&&)i89ll)*&) ",
//   "R**(on%^&ald992) ",
//   "T(*^^%immy77) ",
//   "Ma10**$#g0g0g0i0e",
//   "end of race",
// ]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3. SoftUni Bar Income

function softuniBarIncome (data) {
 
  let totalSum = 0;

  for (let line of data) {
    if (line === 'end of shift' ) {
      break;
    }

    let regex = /%(?<customer>[A-Z][a-z]*)%[^.|*?]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/gm;
    let match = regex.exec(line);

    if (match === null) {
      continue;
    }
    
    let bill = +match.groups.count * +match.groups.price;
    console.log(`${match.groups.customer}: ${match.groups.product} - ${bill.toFixed(2)}`);
    totalSum += bill;
  }
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softuniBarIncome([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift']);

  console.log('~~~~~~~');

softuniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift']);

  
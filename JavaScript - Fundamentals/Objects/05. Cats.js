function catFactory (catsData) {

    let cats = [];

    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let cat of catsData ){
        let tokens = cat.split(' ');
        let catName = tokens[0];
        let catAge = tokens[1];

        let myCat = new Cat (catName, catAge);
        cats.push(myCat);

    }

    for(let cat of cats){
        cat.meow();
    }
}
catFactory(['Mellow 2', 'Tom 5']);
catFactory(['Candy 1', 'Poppy 3', 'Nyx 2']);



// class Cat {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;

//     }
//     meow(){
//         console.log(`${this.name}, age ${this.age} says Meow`);
//     }
// }

// let cats = []

// for (let catDate of catsData){
//     let token = catDate.split(' ');
//     let catName = token[0];
//     let catAge = token[1];
//     let myCat = new Cat(catName, catAge);
//     cats.push(myCat);
// }

// for (let myCat of cats){
//     myCat.meow();
// }
function catFactory (catsData) {
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;

        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = []

    for (let catDate of catsData){
        console.log(catDate);
        let token = catDate.split(' ');
        console.log(token);
        let catName = token[0];
        let catAge = token[1];
        let myCat = new Cat(catName, catAge);
        cats.push(myCat);
    }

    for (let myCat of cats){
        myCat.meow();
    }

}
catFactory(['Mellow 2', 'Tom 5']);
catFactory(['Candy 1', 'Poppy 3', 'Nyx 2']);
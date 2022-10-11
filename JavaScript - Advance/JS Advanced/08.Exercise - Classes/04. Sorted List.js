class List {
    constructor() {
        this.colection = [];
        this.size = 0;
    }

    add(element) {
        this.colection.push(element);
        this.colection.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.colection.length) {
            this.colection.splice(index,1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.colection.length) {
            return this.colection[index];
        }
    }
}
let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

function createPerson(firstName, lastName) {
    let persontemp = {
        firstName: firstName,
        lastName: lastName,
        fullName: this.firstName + ' ' + this.lastName,
    };

    Object.defineProperty(persontemp, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function (value) {
            let [fName, lName] = value.split(' ');
            if (value != `${this.firstName} ${this.lastName}`) {
                this.firstName = fName;
                this.lastName = lName;
            }
        },
    });

    return persontemp;
}
let person = createPerson('Peter', 'Ivanov');

console.log(person.fullName); //Peter Ivanov

person.firstName = 'George';

console.log(person.fullName); //George Ivanov

person.lastName = 'Peterson';

console.log(person.fullName); //George Peterson

person.fullName = 'Nikola Tesla';

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla

// let person = createPerson("Albert", "Simpson");

console.log(person.fullName); //Albert Simpson

person.firstName = 'Simon';

console.log(person.fullName); //Simon Simpson

person.fullName = 'Peter';

console.log(person.firstName); // Simon

console.log(person.lastName);

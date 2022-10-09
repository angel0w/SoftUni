const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
    return this.language.toUpperCase();
    }

}
console.log(person.lang)

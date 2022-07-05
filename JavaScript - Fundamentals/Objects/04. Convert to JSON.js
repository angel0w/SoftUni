function convertToJson (name, lastName, hairColor) {
    // let person = {};
    // person.name = firstName;
    // person.lastName = lastName;
    // person.hairColor = hairColor;
    
    let person = {
        name,
        lastName,
        hairColor
    }

    let resAsString = JSON.stringify(person)
    console.log(resAsString);


}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');
function oldBook(input) {
    let theAniBook = input[0];

    let index = 1;
    let bookIsFound = false;
    let counter = 0; 
    let nextBook = input[index];
    while (nextBook !== 'No More Books'){
        if ( nextBook === theAniBook){  
            bookIsFound = true;
            break;
        }
        counter++;
        index++; 
        nextBook = input[index];   
 
    }
    if (bookIsFound){
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${counter} books.`);
    }
}
oldBook(["Troy", "Stronger", "Life Style", "Troy"]);
oldBook(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books",]);
oldBook(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne",]);

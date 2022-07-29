function movies (input) {
    let movies = [];

    for (let lines of input) {

        if (lines.includes('addMovie')) {
            let movie = lines.split('addMovie ')[1];
            movies.push({name: movie})
        
        } else if (lines.includes('directedBy ')) {
            let movieInfo = lines.split(' directedBy ');
            let name = movieInfo[0];
            let director = movieInfo[1];
            movies.forEach(movie => {
                if(movie.name === name) {
                    movie.director = director
                }
            })
        } else if (lines.includes('onDate')) {
            let [name, date] = lines.split(" onDate ");
            movies.forEach(movie => {
                if(movie.name === name) {
                    movie.date = date;
                }
            })
        }
    }

    movies.forEach(movie => {
        if(movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]);
movies('-------');
movies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
]);


// let string = 'abcaddMovieadcd'; 
// console.log(string);

// console.log('---------');

// console.log(string.split('addMovie')[1])

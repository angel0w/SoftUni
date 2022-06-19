function passwordGuess (input){
    //която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd".
    // При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 
    const text = input[0];
    if ( text === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);
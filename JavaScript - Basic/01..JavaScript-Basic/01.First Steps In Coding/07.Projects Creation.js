function projectCreation (input){
    let arch = input[0];
    let project = Number(input[1]);

    let hours = project * 3;

    console.log(`The architect ${arch} will need ${hours} hours to complete ${project} project/s.`)
}
projectCreation(["George", "9"])

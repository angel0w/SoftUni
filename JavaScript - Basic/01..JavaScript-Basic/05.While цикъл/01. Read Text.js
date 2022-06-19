function readText (input){

    let index = 0;
    let str = input[index];
    index ++;

    while(str !=="Stop"){
        console.log(str);
        str = input[index];
        index++;
    }
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
// readText(["Sofia",
// "Berlin",
// "Moscow",
// "Athens",
// "Madrid",
// "London",
// "Paris",
// "Stop",
// "AfterStop"])


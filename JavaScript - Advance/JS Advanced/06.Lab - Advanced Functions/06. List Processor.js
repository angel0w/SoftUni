function solve(input) {
    let arr = [];

    let comands = {
        add: (str) => arr.push(str),
        remove: (str) => arr = arr.filter(x => x != str),
        print: () => console.log(arr.join(','))
    }

    for (const el of input) {
        let [comand, str] = el.split(" ");
        comands[comand](str);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

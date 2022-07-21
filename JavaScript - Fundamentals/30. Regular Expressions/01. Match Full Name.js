function matchFullName (names) {
    let pattern = /\b[A-Z]{1}[a-z]{1,}\s{1}[A-Z]{1}[a-z]{1,}\b/g;
    let validNames = [];
    let match = pattern.exec(names);

    while(match !== null ){
        validNames.push(match[0]);
        match = pattern.exec(names)
    }
    
    console.log(validNames.join(" "));
}
matchFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov, Yoan Angelov');
function data(year, month, day) {
    let dateinput = `${year}-${month}-${day}`;
    let date = new Date(dateinput);
    date.setDate(date.getDate() - 1);
    console.log(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
}
data(2016, 9, 30);

function calorieObject (array) {
    let obj = {};

    for(let index = 0; index < array.length; index+=2) {
        let step = array[index];

        let value = Number(array[index + 1])
        obj[step] = value; 
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])
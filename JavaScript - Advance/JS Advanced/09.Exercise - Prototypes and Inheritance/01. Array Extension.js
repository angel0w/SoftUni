(function solve () {
    // let myArr = [1,2,3,4,5,6,7,8,9];
    
    // Array.prototype.print = function () {
    //     console.log(this.join(' '));
    // }
    // myArr.print()

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    // console.log(myArr.last()); // 9 

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }
    // console.log(myArr.skip(3)); // [4,5,6,7,8,9]


    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }
    // console.log(myArr.take(3)); // [1,2,3]

    Array.prototype.sum = function () {
        return this.reduce((a,b) => a + b)
    }
    // console.log(myArr.sum()); // 45

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
    // console.log(myArr.average()); // 5
})()

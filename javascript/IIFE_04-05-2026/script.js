//IIFE with Parameters
(function (name) {
    console.log("Welcome " + name)
})("Susmitha")

//IIFE for Variable Privacy
let num = 10;

(function () {
    let secret = "Hidden Data"
    console.log(secret)
})()

//Arrow Function IIFE
const number = 10;

(() => {
    console.log("Arrow Function IIFE");
})();

//IIFE with Return Value
let result = (function () {
    return 10 + 20
})()
console.log(result)

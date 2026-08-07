//Iterable Protocol
const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


const name = "susmitha";

for (const letter of name) {
    console.log(letter);
}
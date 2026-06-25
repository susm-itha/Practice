//Normal Function
function numbers() {
  return [1, 2, 3];
}
const result = numbers();
console.log(result);


//Generator Function
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const results = numbers();
console.log(results.next());
console.log(results.next());
console.log(results.next());
console.log(results.next());
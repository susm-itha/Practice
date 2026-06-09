//flatten()
const numbers = [1, [2, 3], [4, 5], 6]
const result = numbers.flat()
console.log(result)

//Flatten Multiple
const data = [1, [2, [3, [4]]]]
const result = data.flat(3)
console.log(result)

//Flatten Completely
const data = [1, [2, [3, [4, [5]]]]]
const result = data.flat(Infinity)
console.log(result)
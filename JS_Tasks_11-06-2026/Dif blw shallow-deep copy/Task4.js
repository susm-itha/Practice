//shallow-deep copy
let original = {
    name: "Susmitha",
    address: {
        city: "Hyderabad"
    }
}
// Shallow Copy
let shallowCopy = { ...original }
// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original))
shallowCopy.address.city = "Bangalore"
deepCopy.address.city = "Chennai"
console.log(original)
console.log(shallowCopy)
console.log(deepCopy)
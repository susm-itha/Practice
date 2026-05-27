let originalPrimitive = "Initial Value";
let copiedPrimitive = originalPrimitive;

copiedPrimitive = "Changed Value"; 

console.log("Original Primitive:", originalPrimitive); 
console.log("Copied Primitive:", copiedPrimitive);     


let primitive1 = 42;
let primitive2 = 42;

console.log("Primitive Match:", primitive1 === primitive2);

//REFERENCE DATA TYPES COMPARISON

let originalReference = { status: "Initial Value" };
let copiedReference = originalReference;

copiedReference.status = "Changed Value"; 

console.log("Original Reference:", originalReference.status); 
console.log("Copied Reference:", copiedReference.status);     


let reference1 = [1, 2, 3];
let reference2 = [1, 2, 3];

console.log("Reference Match (Different objects):", reference1 === reference2); 

let reference3 = reference1;
console.log("Reference Match (Same object):", reference1 === reference3);   
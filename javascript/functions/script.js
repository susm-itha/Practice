//without parameter
function Message(){
    
    console.log("Welcome JavaScript")
}
Message()

//with parameter
function Messages(name){
    console.log("Hello"+name)
}
Messages("Susmita")


function add(a,b){
    return a+b;
}
function sum(){
    let total = add(10,20);
    console.log("Total =",total)
   
}
sum()

//default parameter
function Messages(name="Susmita"){
    console.log("Hello"+name)
}
Messages()

//passing arrays
function Numbers(numbers) {
    console.log(numbers);
}
Numbers([1, 2, 3, 4]);

//passing object argument
function display(user) {
    console.log(user.name);
    console.log(user.age);
}
display({
    name: "Susmitha",
    age: 24
});
 
//arguments length
function total() {
console.log(arguments.length);
}
total(1, 2, 3, 4, 5);

//arguments object
function add() {
let sum = 0;
for(let i = 0; i < arguments.length; i++) {
sum += arguments[i];
}
console.log(sum);
}
add(10, 20, 30, 40);

//parameter priority
function welcome(name = "Guest") {
console.log(name);
//execution flow
name = "Susmitha"
name = "Guest"
}
welcome("Susmitha");
welcome();


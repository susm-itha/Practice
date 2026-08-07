//functions + loops
function Numbers(num) {
for(let i = 1; i <= num; i++) {
console.log(i);
}
}
Numbers(5);

//execution flow
function add(a=5,b=10) {
console.log(a+b);
//execution flow
a = "5"
b = "10"
}
add("a+b");
add();

//dowhile
let b = 1;
do {
console.log(b);
b++;
}
while(b <= 3);

//while
let a = 1;
while(a <= 2) {
console.log(a);
a++;
}

//forin 

let student = {
    name: "Susmitha",
    age: 24,
    course: "JavaScript"
};
for(let key in student) {
console.log(key + " = " + student[key]);
}


//forof
let colors = ["Red", "Blue", "Green"];
for(let color of colors) {
console.log(color);
}
//forloop
let i = 1;
for (let count = 0; count <= 8; count++) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i += 1;
}

//rest paramenters
function totalMarks(...marks) {
let total = 0;
//forof loop
for(let mark of marks) {
total += mark;
}
console.log("Total Marks =", total);
}
totalMarks(10, 15, 20);



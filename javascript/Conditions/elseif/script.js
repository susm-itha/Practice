let time = 24;
let greeting;

let Morning = time < 10; 
let Day = time < 20;    

if (Morning) {
  greeting = "Good morning";
} else if (Day) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
console.log(Morning);
console.log(Day);
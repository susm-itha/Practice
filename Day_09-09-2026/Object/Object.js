let student = {
    name: "Susmitha",
    age: 24,
    course: "JavaScript",

//Nested Object
    address: {
        city: "Hyderabad",
        pincode: 500001
    },

//Object Method
    getDetails: function () {
        return this.name + " is learning " + this.course;
    }
};


//Accessing Properties
console.log(student.name);
console.log(student.age);

// Accessing Nested Object
console.log(student.address.city);


// Updating Properties
student.age = 23;
student.course = "Javascript";


//Calling Object Method
console.log(student.getDetails());


//Object.keys()
console.log(Object.keys(student));


//Object.values()
console.log(Object.values(student));


//Object.entries()
console.log(Object.entries(student));


//Shallow Copy
let shallowCopy = { ...student };

shallowCopy.name = "Rahul";

console.log("Original:", student.name);
console.log("Shallow Copy:", shallowCopy.name);


//Deep Copy
let deepCopy = JSON.parse(JSON.stringify(student));

deepCopy.address.city = "Bangalore";

console.log("Original City:", student.address.city);
console.log("Deep Copy City:", deepCopy.address.city);


// Display in webpage
function showStudent() {
    document.getElementById("output").innerHTML = `
        Name: ${student.name}<br>
        Age: ${student.age}<br>
        Course: ${student.course}<br>
        City: ${student.address.city}<br>
        ${student.getDetails()}
    `;
}
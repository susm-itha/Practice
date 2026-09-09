// Function Declaration
function student(name, age = 20) {
    console.log(name, age);
}

// Function Expression
const course = function() {
    console.log("JavaScript");
};

// Arrow Function
const welcome = () => {
    console.log("Welcome Student");
};

// Parameters and Arguments
student("Susmitha", 25);

// Default Parameter
student("Manasu");

// Rest Parameter
function marks(...values) {
    console.log(values);
}

marks(80, 90, 85);

// Arguments Object
function details(name, age) {
    console.log(arguments);
}

details("Susmitha", 25);

// Recursive Function
function count(num) {
    if (num <= 3) {
        console.log(num);
        count(num + 1);
    }
}

count(1);

// Callback Function
function result(name, callback) {
    console.log(name);
    callback();
}

result("Susmitha", welcome);
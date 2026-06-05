//call
const person1 = {
    name: "Susmitha"
}
function greet(city, country) {
    console.log(
        "Hello, I am " + this.name +
        " from " + city +
        ", " + country
    );
}
greet.call(person1, "Hyderabad", "India")

//apply
const person2 = {
    name: "manasu"
};

function introduce(city, country) {
    console.log(
        "I am " + this.name +
        " from " + city +
        ", " + country
    );
}
introduce.apply(person2, ["Chennai", "India"]);

//bind
const employee = {
    name: "sus"
};

function display(role) {
    console.log(this.name + " is a " + role)
}
const boundFunction = display.bind(employee)
boundFunction("Developer")
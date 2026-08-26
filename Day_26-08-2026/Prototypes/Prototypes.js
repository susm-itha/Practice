function Person(name, age) {
    this.name = name;
    this.age = age;
}

// prototype
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

// Creating objects
const person1 = new Person("Susmitha", 25);
const person2 = new Person("Manasu", 26);

person1.sayHello();
person2.sayHello();


// __proto__
console.log(person1.__proto__ === Person.prototype);

// Prototype Chain
console.log(person1.__proto__);

// Person.prototype
console.log(person1.__proto__.__proto__);

// Object.prototype
console.log(person1.__proto__.__proto__.__proto__);
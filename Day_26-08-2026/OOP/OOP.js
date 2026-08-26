//Classes
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    introduce() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);

        this.course = course;
    }
    study() {
        console.log(this.name + " is studying " + this.course);
    }
}
const student1 = new Student("Susmitha", 25, "JavaScript");
student1.introduce();
student1.study();
//Arrow Function Inside an Object
const person = {
    name: "Susmitha",

    arrowFunction: () => {
        console.log(this.name)
    }
};
person.arrowFunction()

//Arrow Function Inside a Regular Method
const student = {
    name: "susmitha",

    showDetails: function () {

        const innerArrow = () => {
            console.log(this.name)
        };

        innerArrow()
    }
};
student.showDetails()

//Arrow Function with setTimeout
const employee = {
    name: "susmitha",

    display: function () {

        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}
employee.display()


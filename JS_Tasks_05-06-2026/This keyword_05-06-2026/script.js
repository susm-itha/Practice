//this Inside an Object Method
const student = {
    name: "Susmitha",
    age: 24,
    showDetails: function () {
        console.log(this.name)
        console.log(this.age)
    }
}
student.showDetails()

//this Inside Arrow Function
const person = {
    name: "susmitha",
    normalFunction: function () {
        console.log("Normal Function:", this.name)
    },

    arrowFunction: () => {
        console.log("Arrow Function:", this.name)
    }
}
person.normalFunction()
person.arrowFunction()

//Changing this Using call
const user1 = {
    name: "susmitha"
};
function greet(city) {
    console.log(this.name + " from " + city)
}

greet.call(user1, "Hyderabad")

//Changing this Using apply()
const user2 = {
    name: "manasu"
};
function introduce(city, country) {
    console.log(this.name + " from " + city + ", " + country)
}

introduce.apply(user2, ["Delhi", "India"])
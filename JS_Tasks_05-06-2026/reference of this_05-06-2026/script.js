//Changing this Using call
const student1 = {
    name: "susmitha"
};

const student2 = {
    name: "manasu"
};
function greet() {
    console.log("Hello " + this.name);
}
greet.call(student1);
greet.call(student2);

//Changing this Using apply
const employee = {
    name: "sus"
};

function introduce(city) {
    console.log(this.name + " from " + city);
}

introduce.apply(employee, ["Hyderabad"])

//Losing the Reference of this
const car = {
    brand: "Toyota",

    showBrand: function () {
        console.log(this.brand);
    }
};

const print = car.showBrand;

print();
const employee = {
  name: "sus",

  greet() {
    return "Hello " + this.name;
  }
};

console.log(employee.greet());
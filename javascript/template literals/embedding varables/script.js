//embedding string
let username = "susmitha";
let role = "ASE";
let statement = `my role ${role} name is ${username}`;
console.log(statement);

//embedding numbers
let items = 4;
let costPerItem = 5;
let billing = `You ordered ${items} items, Total $${items * costPerItem}`;
console.log(billing);

//embedding logic
let isLoggedIn = true;
let user = "susmitha";
let welcome = `Welcome ${isLoggedIn ? `back, ${user}`:"guest"}!`;
console.log(welcome);

//embedding function
let name = "samudrala";
let Message = `${name.toUpperCase()} has logged in`;
console.log(Message);
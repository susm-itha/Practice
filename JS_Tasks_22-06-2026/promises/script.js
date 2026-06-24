//promise all
const p1 = Promise.resolve("Task 1");
const p2 = Promise.resolve("Task 2");
const p3 = Promise.resolve("Task 3");

Promise.all([p1, p2, p3])
  .then(result => console.log(result));

//promise race
const B1 = new Promise(resolve => setTimeout(() => resolve("Task 1"), 3000));
const B2 = new Promise(resolve => setTimeout(() => resolve("Task 2"), 1000));

Promise.race([B1, B2])
  .then(result => console.log(result));

//Promise allSettled
const C1 = Promise.resolve("Success");
const C2 = Promise.reject("Failed");

Promise.allSettled([C1, C2])
  .then(result => console.log(result));

//Promise any
const D1 = Promise.reject("Failed");
const D2 = Promise.resolve("Success");

Promise.any([D1, D2])
  .then(result => console.log(result));

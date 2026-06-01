//infinite recursion
function test(n) {
    if (n === 0) {
        return;
    }
    console.log("Hello", n);
    test(n - 1);
}

//missing increment
 let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//wrong loop condition
let n = 0;
for (let j = 0; j <= 5; j++) {
    console.log("j =", j);
}



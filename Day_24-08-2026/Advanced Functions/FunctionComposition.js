function double(num) {
    return num * 3;
}

function addFive(num) {
    return num + 5;
}

function compose(f, g) {
    return function(value) {
        return f(g(value));
    };
}

const result = compose(double, addFive);

console.log(result(10));
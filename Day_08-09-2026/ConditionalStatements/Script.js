let marks = 75;

// if
if (marks >= 40) {
    console.log("Student Passed");
}

// if...else
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if
if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Nested Conditions
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry Allowed");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Entry Not Allowed");
}

// switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
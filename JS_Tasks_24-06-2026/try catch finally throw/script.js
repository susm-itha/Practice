function checkAge(age) {
    try {
        if (age === "") {
            throw new Error("Age cannot be empty");
        }

        if (isNaN(age)) {
            throw new Error("Age must be a number");
        }

        if (age < 18) {
            throw new Error("Age must be 18 or above");
        }

        console.log("Eligible to vote");
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Age validation completed");
    }
}

checkAge(16);
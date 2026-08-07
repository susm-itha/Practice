function checkAge(age) {
    try {
        // Custom error
        if (age < 18) {
            throw new Error("Age must be 18 or above.");
        }

        console.log("You are eligible to vote.");

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        console.log("Age verification completed.");
    }
}

// Function calls
checkAge(16);
checkAge(20);
function checkEligibility() {
    let age = prompt("Enter your age:");

    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
}

checkEligibility();

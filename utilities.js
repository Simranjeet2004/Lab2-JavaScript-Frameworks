// First function: No return, just print a message using input parameters
export function greetUser(firstName, middleName, lastName) {
    console.log(`Welcome ${firstName} ${middleName} ${lastName} to G@I College!`);
}

// Second function: Convert minutes to hours
export function convertMinutesToHours(minutes) {
    const hours = minutes / 60;
    return hours;
}

// Third function: Multiply multiple numbers
export function multiplyNumbers(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

// Fourth function: Calculate simple interest
export function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

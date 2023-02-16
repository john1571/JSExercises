// let is the best way to make a variable
let name = "Bartleby the Scrivner";
let age = 42;
let height = 74;

// Puzzle: what happens if you use Math.round?
let feet = Math.floor(height/12);
let inches = height - (feet * 12);
let rounded = Math.round(inches/3);

// you can use a variable as a parameter
console.log("Name:", name);
console.log("Age:", age);
console.log("Rounded inches/3:", rounded);

// you can also embed variables in strings with ``
console.log(`Height ${feet} feet ${inches} inches.`);

console.log("Age * Height:", age * height);

// you can also put math in the ${} boundaries
console.log(`Age * feet: ${age * feet}`);
// Exercise 11: Functions

const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson('Mrs Brown', 56);
printPerson('Lovely Daughter', 23);
printPerson('Noah', 900);
printPerson('Galahad', 78);

console.log('----------------- pets -----------------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old`);
}

printPet('Mrs Brown', 56, 'puddles', 12);
printPet('Lovely Daughter', 23, 'Stanley', 2);
printPet('Noah', 900, 'a dove', 0);
printPet('Galahad', 78, 'A dragon', 150);
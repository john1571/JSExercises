// Exercise 12: Functions, Files, Variables
// Using old function format.

const fs = require('fs');

function print_lines(err, data) 
{
    console.log(data.toString());
}

function yell_at_me(what)
{
    return what.toUpperCase();
}

fs.readFile('poem.txt', print_lines);

// let's do that again but with an anonymous function
// you've actually seen this before

fs.readFile('poem.txt', 
    function(err, data)
    {
        let yelling = yell_at_me(data.toString());
        print_lines(err, yelling);
    });
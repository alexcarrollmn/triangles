const comm = require("commander");
const chalk = require("chalk");
const Triangle = require("./Triangle.js");


//deal with arguments being passed.
comm.option('-t, --triangle <sides>', 'Sides of a triangle: "3, 4, 5"', function(sides){
    sides = sides.replace(/\s/g, '').split(',')
    return sides;
}).parse(process.argv);

//create the triangle
const tri = new Triangle(comm.triangle);

//catch those errors
if(tri.type !== null && typeof tri.type === 'object'){
    if(tri.type.name == "Error"){
        return console.log(`${chalk.bold.red("Error: ")} ${tri.input} is not a valid input. Use three integers: "3, 4, 5"
        `);
    }
}

//english is fun
let article = `an`;
if(tri.type === 'scalene'){
    article = `a`;
}

//and finally, if there is no error, give a response
if ( !tri.type ){
    return console.log(`${chalk.bold.green("Answer: ")} ${tri.input} ${chalk.red("does not")} make a triangle.
    `)
}
return console.log(`${chalk.bold.green("Answer: ")} ${tri.input} makes ${article} ${chalk.green(tri.type)} triangle.
`);
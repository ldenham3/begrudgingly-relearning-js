//Following tutorial https://www.youtube.com/watch?v=W6NZfCO5SIk

// Im not explaining why and how, tutorial. bite me
// apparenly ctrl l clears console, TIL soemthing. which i have remapped and keep forgetting is definitely caps lock now
console.log('Seriously everything. I hate it. Also its physically painful to leave this in the html file. Edit: finally moved it.');

// VARIABLES
// var apparenly is pre es6 and has issues, we use let for variables now i guess 
// variables undefined by nature
// no spaces, hyphens, or beginning with a number, case sensitive
// use camel case
// initializing and assigning can be done on a single line for multiple variables but it is not best practice 
let name = 'Miserable HumanBeing';
console.log(name);

let fullName = 'Super Unhappy';
console.log(fullName);

// CONSTANTS

// reassigning
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// would cause error
const interestRateButForReal = 1;
// line below will cause error: Uncaught TypeError: Assignment to constant variable.
// interestRateButForReal = 0.3;
console.log(interestRateButForReal);

// VARIABLE TYPES: PRIMATIVE/VALUE VS REFERENCE
// primitives/value: string, number, boolean, undefined (x2), null, in that order
// reference: objs, arrays, functions, not until later section, probably divided up
// apparenly es6 has another primitive, symbol, which he isnt teaching right now because stupid
let strExample = 'Kill Me Now'; //string literal
let numExample = 30; //number literal
let boolExample = true; //boolean literal
let undefExample; //if you dont initialize, its automatically undefined
let undefdefExample = undefined; //...unsurprisingly you can also set it, except, dont?
let nullExample = null; //clear a variable value on purpose, ex no color selected by user, which then will be replaced if they pick one

// DYNAMIC TYPING
// something something static languages vs dynamid: static var declaration types cant be changed, dynamic can change at runtime
let dynVarEx = 'I start as a string'; //can check type of in console with typeof varname. if you change in console dynVarEX = 1;, type of will then be number
// no floats or ints in js, all numbers are type number
// undefined is both a type and a value
// type of null variables is object

//OBJECTS
// like everywhere else, when dealing with multiple related variables put them in an object, shocker 
// let or const work with objs
let person = {
	name: 'Still Bored',
	age: 1000000
}; 
//{} is called object literal, add one or more key value pairs

// changing/accessing a value in an obj, dot notation vs bracket notation
// dot should be default, its shorter. but sometime you dont know name of target property until runtime so bracket has its uses
person.name = 'Extremely Bored';
person['name'] = 'Stupid Bored';

// ex var somewhere else called selection tracking what the user is selecting, can use bracket to access dynaically
// ex accessing property dynamically
let selection = 'name';
person[selection] = 'Most Miserable';

console.log(person);
// can log properties in console
console.log(person.name);


// ARRAYS
// as usual, a list of shit, data structure that represents a list of items
// zero indexed, duh
let selectedColors = ['red', 'blue'];
// adding to arrays allowed, array length and type of objs in array is dynamic, can have different types in array
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);

// arrays treated as/are objects. so has properties/key value pairs you can access with dot notation. typeof selectedColors will be object
console.log(selectedColors.length); //number of items/elements in array

// accessing element in array by index, party
console.log(selectedColors[0]);


// FUNCTIONS
// aka the js thing that i think makes no sense
// set of statemtns that performs a task or calculates a value
function greet() {
	//function body, add statements for logic. this displays message in console
	console.log('Hello World, really? REALLY?');
}
// call function
greet();

// functions can have inputs which change how it behaves
// display name of person
function greetDynamic(name) { //<-name is a paramater, only meaningful in fucntion, local like expected, name is an input to this function
	console.log('Hello ' + name);
}

greetDynamic('John'); //<-argument
greetDynamic('Mary');

//function with multiple parameters
function greetDynamicPlusMultipleParams(name, lastName) {
	console.log('Hello again ' + name + ' ' + lastName);
}

greetDynamicPlusMultipleParams('John', 'Smith');
greetDynamicPlusMultipleParams('Mary', 'Istoppedcaring');

// if you dont pass a value it will show as undefined
greetDynamicPlusMultipleParams('Noname'); //will print Noname undefined

// paramater vs argument - param is what goes in func at time of declaration, argument is actual value supplied for that param


// TYPES OF FUNCTIONS
// calculating values and performing a tasks
// above was performing task, below calculating values
function square(number) {
	//calculate square of number
	return number * number;
}

let number = square(2); //returns a value that you can use to initialize a value
console.log(number);

// can also be written...
console.log(square(3)); //apparently we need to call out console.log is also a function call, bc parens and stuff

//closing:
// function is a set of statements that calcualtes value or performs a task
// real world application, collection of 100s or 1000s of fucntions working together to provide functionality of application






































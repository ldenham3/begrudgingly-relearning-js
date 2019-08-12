// //FOLLOWING ALONG IN OBJECTS SECTION. NOT EXERCISES

// //Highly related properties should be in an object, for example instead of radius, x and y variables independently for a circle use object: (const and let both work)
// //one or more key value pairs needed, can be anything, including a function or antoher obj
// //purpose is grouping related variables but often we also have functions that should operate on these vairables, like a draw function for drawing a circle, or move to move it
// //if function is highly related to object, its better to put them inside the object than stand alone
// //where you have obj in program you have access to all its properties and functions using dot notation
// //value of key value in JS can be anything
// //OOP style - view program as a set of objects that talk and work together to perform some functionality
// //if a function is part of an object we call it a method

// let circle = {
// 	radius: 4, 
// 	location: {
// 		x: 5,
// 		y: 6,
// 	},
// 	isVisible: true,
// 	draw: function() {
// 		console.log('draw');
// 	}
// };

// circle.draw(); //this method will print draw to the console, as per the declaration in the object


// //BUTTT when your objects have logic, we need a new way to create objects to avoid duplication. Use factory or constructor functions

// //Factory Function - produces objects
// //move object inside factory function and then instead of declaring, just return the object so whenever create circle is called it returns that object
// //then instead of hard coding values that you may want to change with each object, move them to parameters of the function and set them to themselves inside the object
// function createCircle(radius, location) {
// 	return {
// 		radius: radius, 
// 		location: location,
// 		isVisible: true,
// 		draw: function() {
// 			console.log('draw');
// 		}
// 	};
// }

// //IF KEY AND VALUE ARE THE SAME you can remove the value and adding the key 
// function createCircle2(radius) {
// 	return {
// 		radius, //dont need the whole thing
// 		draw: function() {
// 			console.log('draw');
// 		}
// 	};
// }

// //Better way of defining the methods than key value pair, you can drop the function keyword when inside an object
// //Can call circle1.draw() on the console to run that method
// function createCircle3(radius) {
// 	return {
// 		radius, //dont need the whole thing
// 		draw() {
// 			console.log('draw');
// 		}
// 	};
// }

// const circle1 = createCircle3(1);
// console.log(circle1);

// const circle2 = createCircle3(2);
// console.log(circle2);


// //CONSTRUCTOR FUNCTIONS -another pattern for creating objects - factory functions arent the only way to create objects
// //create function whos job it is to make an object 
// //naming convention, camel case vs pascal (every word uppercase), use Pascal for constructors
// //this - a reference to the object executing the piece of code, think of it like an empty object, so you can use dot notation
// //js objects are dynamic, once created we can always change or add properties or methods or remove existing ones

// function Circle(radius) {
// 	this.radius = radius; //adding a new property to an empty object
// 	this.draw = function() {
// 		console.log('draw');
// 	}
// 	// return this;  <-- Implicit, we dont need it. but this is how it acts
// }

// //new operator creates an empty js object, kind of like const x = {}, under the hood
// //next it sets 'this' to point to the new empty object
// //finally, returns new object from the function called, we dont have to put it, but its like having return this statement in the function, see above commented out
// //circle3 now points to that new object
// const circle3 = new Circle(1);

// //FACTORY VS CONSTRUCTOR 
// //both equally good for creating, constructor is more recognizable to other peoples experiences, no real difference between these two
// //FACTORY - call funtion that returs a new object
// function factoryFunctionExample(params){
// 	return {
// 		params,
// 		imAMethod() {
// 			console.log('method doing stuff');
// 		}
// 	}
// }

// const factoryObj = factoryFunctionExample(1);  //call funtion, within the function the object is returned

// //CONSTRUCTOR - use new operator and instead of returning an object we use 'this'. Also Pascal naming
// //3 things happen w/ new operator: creates empty js object under the hood, sets 'this' to point to the new empty object, returns object
// function ConstructorExample(params) {
// 	this,params = params;
// 	this.methodexample = function() {
// 		console.log('doing stuff');
// 	}
// }

// const constructorObj = new ConstructorExample(1);


// //ADDING PROPERTIES TO OBJECTS 
// //objects are dynamic you can add and remove properties and methods
// //constant used here means that we cant change circle to a new object, cant be reassigned. can still add and remove properties. 

// const circle4 = {
// 	radius: 1
// };

// circle4.color = 'yellow';
// circle4.draw = function() {};

// //deleting
// delete circle4.color;
// delete circle4.draw;

// console.log(circle4); //shows it now has two properties

// //Constructor Property
// //every js obj has a constructor property that references the function used to create/construct it

// //circle5.constructor in the console returns the Circle function 
// const circle5 = new Circle(1);

// //circle6.constructor will return Object(), first letter is uppercase so this is a built in js constructor function
// //when we create objects using the object literal syntax, the js engine uses this constructor function 
// const circle6 = createCircle3(1);

// //example of object literal syntax and built in constructor function
// let x = {}; //js engine translates this to let x = new Object();

// //a few other built in contsructors:  
// //new Object()
// //new String() - though we usually use literals to create strings, '' or "" or ``
// //new Boolean() - we just use true or false
// //new Number() - we use 1, 2, 3, etc

// //Every obj has a constructor property which references the function that was used to create that object

// //Functions ARE objects, the Circle function above is actually an object
// //console examples: Circle.name returns "Circle", Circle.length returns the number of arguments
// //Circle.constructor returns Function() which JS is using internally to create the object

// //when we declare a function internally it is represented like this
// const Circle1 = new Function('radius', `
// this.radius = radius; //adding a new property to an empty object
// this.draw = function() {
// 	console.log('draw');
// }
// `);

// //can call this just like the Circle function above
// const circle7 = new Circle1(1); //typing circle7 in the console shows its a real circle object with a radius and a draw method

// //available methods
// //call - can call a function
// Circle.call({},1)  //new empty obj passed to call method (which determines context for 'this') followed by arguments. the same as new Circle(1)

// //if you dont use new operator, 'this' by default points to the global object, which is window

// //apply - like call, calls function, but instead of passing all arguments explicitly, they are in an array (useful if you already have an array elsewhere you want to pass)
// Circle.apply({}, [1,2,3])

//REDO - Took too long of a break on this section so i started over
let radius = 1;





















































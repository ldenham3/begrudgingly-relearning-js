//CONTROL FLOW EXERCISES PART 2
//Too many exercises in this section, need a new file

//EXERCISE 1 
//write a function that takes in 2 numbers and returns the max of the 2
console.log('---EXERCISE 1---')

function maxOfTwo (number1, number2) {
	if (number1 > number2) return number1;
	return number2;
}

//OR conditional operator
function maxOfTwoConditional (number1, number2) {
	return (number1 > number2) ? number1 : number2;
	//or return max = number1 > number2 ? number1 : number2;
}

console.log(maxOfTwo(3,2));
console.log(maxOfTwoConditional(3,2));

//EXERCISE 2, landscape or portrait
console.log('---EXERCISE 2---')

function isLandscape (width, height) {
	return (width > height);
	// NOT this, dont need the end: return (width > height) ? true : false;
}

console.log(isLandscape(1000, 2000));

//EXERCISE 3
console.log('---EXERCISE 3---')
//give input, return string
//if number input is divisible by 3, return fizz, divisible by 5 return buzz, both return fizzbuzz, else 

function fizzBuzz (input) {
	if (Number.isInteger(input)) { //also can use if (typeof input == 'number')
		if (input % 3 === 0) {
			if (input % 5 === 0) {
				return 'FizzBuzz'
			}
			else return 'Fizz'
		}
		else if (input % 5 === 0) {
			return 'Buzz'
		}
		else return input 
	}
	else return NaN //also can use return 'Not A Number'
}

console.log('Fizz: ', fizzBuzz(3));
console.log('Buzz: ', fizzBuzz(5));
console.log('FizzBuzz: ', fizzBuzz(15));
console.log('7: ', fizzBuzz(7));
console.log('NaN: ', fizzBuzz('string'));
console.log('NaN: ', fizzBuzz(true));


//EXERCISE 4
console.log('---EXERCISE 4---')
// speed <= 70 - OK
// for every 5 k above 70, one point
// more than 12 points, suspended 



function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoints = 5;
	
	if (speed < speedLimit + kmPerPoints){ 
		return 'OK'; 
	} 
	else {
		let points = Math.floor((speed-speedLimit)/kmPerPoints);
		console.log(points);

		if (points > 12) {
			return 'License Suspended'; 
		}
		else {
			return points;
		}	
	}

	
}

console.log('OK: ', checkSpeed(50));
console.log('OK: ', checkSpeed(70));
console.log('Ok: ', checkSpeed(72));
console.log('Points = 1: ', checkSpeed(75));
console.log('Points = 6: ', checkSpeed(100));
console.log('Points = 10: ', checkSpeed(120));
console.log('License Suspended: ', checkSpeed(1080));


//EXERCISE 5
console.log('---EXERCISE 5---');
//display all numbers from 0 to limit, if even display even if odd display odd

function showNumbers(limit) {
	for (var i = 0; i <= limit; i++) {
		console.log((i%2 === 0) ? (i + ' EVEN') : (i + ' ODD'));
	}
}

console.log(showNumbers(10));

//EXERCISE 6
console.log('---EXERCISE 6---');
//take in array, return number of elements that are truthy
//FALSY VALUES - undefined, null, '', false, 0, NaN

function countTruthy(array) {
	let countOfTruthy = 0;
	for(e in array){
		//apparently a = a || 0 converts all falsy values to 0, had to google this, did it the commented out way first but NaN wouldnt work
		array[e] = array[e] || 0;
		if (array[e] != 0) {
			countOfTruthy++;
		} 

		// if(!(array[e] == '' || array[e] == false || array[e] == NaN || array[e] == null || array[e] == 0 || array[e] == undefined)){
		// 	countOfTruthy++;
		// }
		// console.log(countOfTruthy, array[e]);
	}
	return countOfTruthy;
}

var truthyvsfalsey1 = ['', NaN, true, false, null, 1, 0, undefined];
console.log(truthyvsfalsey1, countTruthy(truthyvsfalsey1));

console.log('Instructor solution');

function countTruthyInstructor(array) {
	let count = 0;
	for(let value of array){
		if (value) {
			count++;
		}
	}
	return count;
}

console.log('Instructor solution: ', countTruthyInstructor(truthyvsfalsey1));


//EXERCISE 7
console.log('---EXERCISE 7---');
//take in object, return all values that are strings

const someStrings = {
		name: 'Leah',
		age: 26,
		bday: 82892,
		lastName: 'Baker',
		address: '180A Palo Alto Ave'
	};

function showProperties(obj) {
	let stringValues = [];
	for (let key in obj){
		if(typeof(obj[key]) === 'string') {
			console.log(key, obj[key]);
			stringValues.push(key, obj[key]);  
		}
	}
	return stringValues;
}

console.log(showProperties(someStrings));


//EXERCISE 8
console.log('---EXERCISE 8---');
//return sum of all multiples of 3 and 5 up to limit

function sum(limit){
	let sum = 0;
	// let multiplesTest = [];

	for (let i = 0; i <= limit; i++) {
		if (i % 3 === 0 || i % 5 === 0){
			sum += i;
			// multiplesTest.push(i);
		}
	}

	return sum;
}

console.log(sum(10));


//EXERCISE 9
console.log('---EXERCISE 9---');
//calculate student grade with average

// 0-59: F, 60-69: D, 70-79: C, 80-89: B, 90-100: A

const marks = [80, 80, 50];
const marks2 = [70, 40, 50];

function calculateGrade(marks){

	
	//the first section is the recomended way to add up all the values in an aray according to stack overflow
	let avgerageGrade = (marks.reduce((a, b) => a + b, 0))/marks.length;
	console.log(avgerageGrade);
	let letterGrade = '';

	if (avgerageGrade < 60) letterGrade = 'F';
	else if (avgerageGrade < 70) letterGrade = 'D';
	else if (avgerageGrade < 80) letterGrade = 'C';
	else if (avgerageGrade < 90) letterGrade = 'B';
	else if (avgerageGrade >= 70) letterGrade = 'A';
	else return 'Not a valid grade.';

	return letterGrade;

}

console.log(calculateGrade(marks));
console.log(calculateGrade(marks2));

//OR split into two fucntions

function calcGradeAvg(marks){
	return (marks.reduce((a, b) => a + b, 0))/marks.length;
}

function letterGrade(marks){
	if (marks < 60) return 'F';
	if (marks < 70) return 'D';
	if (marks < 80) return 'C';
	if (marks < 90) return 'B';
	if (marks >= 90) return 'A';


}

console.log(calcGradeAvg(marks));
console.log(letterGrade(calcGradeAvg(marks)))


//EXERCISE 10
console.log('---EXERCISE 10---');
//stars and rows

function showStars(rows){
	let starGrid = [];

	for (let i = 1; i <= rows; i++) {
		starGrid.push('*'.repeat(i), "\n");
	}

	return starGrid;
}

//OR print to console directly
function showStars2(rows){
	for (let i = 1; i <= rows; i++) {
		console.log('*'.repeat(i));
	}
}

//OR nested loop
function showStars3(rows){
	for (let i = 1; i <= rows; i++){
		let pattern = '';
		for(let j = 0; j < i; j++){
			pattern += '*';
		}
		console.log(pattern);
	}
}


console.log(showStars(5));
console.log('attempt 2 break');
console.log(showStars2(5));
console.log('attempt 3 break');
console.log(showStars3(5));


//EXERCISE 11
console.log('---EXERCISE 11---');
//show prime numbers up to limit
//i dont think his way is correct either, stopped caring because math is googable 

function showPrimes(limit){
	let primes = [];
	for (let i = 2; i <= limit; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0){
				break;
			} else {
				primes.push(i);
				break;
			}
		}
		
	}
	return primes;
}

console.log(showPrimes(200));





















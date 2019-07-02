//control flow section assignments

//Practice one, if else
//
//If 6am - 12pm - "Good Morning!"
//Else if 12pm - 6pm - "Good Afternoon!"
//Else - "Good Evening!"
//just with variables, we arent using clocks or anything yet, literally just an if else
//gonna use 24 hour time

console.log('-----IF/ELSE EXAMPLE------');

let time = 8 //morning variable
let secondTime = 13
let thirdTime = 20


if (thirdTime >= 6 && thirdTime <= 12)
	console.log('Good Morning!')
else if (thirdTime > 12 && thirdTime <= 18)
	console.log("Good Afternoon!");
else console.log('Good Evening!')


//Switch and Case
console.log('-----SWITCH/CASE EXAMPLE------');

let role = 'thing2';

switch (role) {
	case ('thing1'):
		console.log('is thing 1');
		break;
	case ('thing2'):
		console.log('is thing 2');
		break;
	default:
		console.log('unknown thing');
}


//for loops
console.log('-----FOR LOOP EXAMPLE------');

for (let i = 0; i < 5; i++) console.log('Hello World', i) //if multi line, block needed

//display only odds
for (let i = 0; i <= 10; i++) if (i % 2 != 0) console.log(i) 
//Array of division options and answers

const presentQuestion = {
	question: "What is one of the harest thigns to learn in programming?",
	answer: "How to apply in real world situation",
	allAnswers:["Syntax",
				"Memorizing Functions",
				"Understanding calling Functions",
				"How to apply in real world situation"],
	
	
}

const oneQuestion = {
	question: "How to create a const?",
	answer: "const name = value;",
	allAnswers:["const name = value;", "name = value","const name = value","const value;"],
	
	
}

const twoQuestion = {
	question: "What is a function?",
	answer: "Reusable blocks of code ",
	allAnswers:["Reusable blocks of code ", "Purpose of something","The rules of how code works","Single object that contains multiple values"],
	
	
}

const threeQuestion = {
	question: "What is syntax?",
	answer: "The rules of how code works",
	allAnswers:["Reusable blocks of code ", "Type of spice","The rules of how code works","Single object that contains multiple values"],
	
	
}

const fourQuestion = {
	question: "What is an array?",
	answer: "Single object that contains multiple values",
	allAnswers:["Reusable blocks of code ", "Something shot from a bow an arrow","The rules of how code works","Single object that contains multiple values"],
	
	
}

const fiveQuestion = {
	question: "Which is correct syntax?",
	answer: "let count = 1;",
	allAnswers:["let count = 1","let count = 1;","let = 1;", "let  ;"],
	
	
}

const sixQuestion = {
	question: "What is function?",
	answer: "Reusable blocks of code ",
	allAnswers:["Reusable blocks of code ", "Purpose of something","The rules of how code works","Single object that contains multiple values"],
	
	
}

const sevenQuestion = {
	question: "What can a vairble not hold?",
	answer: "Syntax",
	allAnswers:["Number","Boolean","Syntax", "String"],
	
	
}

const eightQuestion = {
	question: "What is not a keyword for a varible?",
	answer: "able",
	allAnswers:["let", "var","const","able"],
	
	
}

const nineQuestion = {
	question: "Which varble is not correctly declared?",
	answer: "Answer 0",
	allAnswers:["let item = 1;","able item = 1;","var item = 1;","const item = 1;"],
	
	
}

const tenQuestion = {
	question: "What prints out to the console?",
	answer: "console.log('print out');",
	allAnswers:["console.log('print out');","console.log('print out')","log('print out');","console('print out');"],
	
	
}
///New Things

const elevenQuestion = {
	question: "WHich is a whole number?",
	answer: "30",
	allAnswers:["0.98","4.23","30i", "30"],
	
	
}

const tweleveQuestion = {
	question: "Do you need to declare varible type?",
	answer: "No",
	allAnswers:["Yes", "No","Always","Will throw an error"],
	
	
}

const thirteenQuestion = {
	question: "What value is only true or false?",
	answer: "Boolean",
	allAnswers:[ "String","Boolean","Number","Object"],
	
	
}

const fourteenQuestion = {
	question: "This: let dog = {name: 'spot', breed: 'Dalmation'} is what?",
	answer: "Object",
	allAnswers:["Varible","Array","String", "Object"],
	
	
}
const fifteenQuestion = {
	question: "Const is special compared to regular vairble?",
	answer: "Can't assign after initalized",
	allAnswers:["Can change once established","Need to declare varible type", "Can initalized without a value","Can't assign after initalized"],
	
	
}
const sixteenQuestion = {
	question: "What isan integer?",
	answer: "Without a factional part",
	allAnswers:["Binary","Without a factional part","Decimal Point", "Number System"],
	
	
}
const seventeenQuestion = {
	question: "What is a floating point numbers?",
	answer: "Decimal Point",
	allAnswers:["Binary","Without a factional part","Decimal Point", "Number System"],
	
	
}

const eighteenQuestion = {
	question: "What is remainder or modulo?",
	answer: "%",
	allAnswers:["*","*","%", "**"],
	
	
}

const nineteenQuestion = {
	question: "What dose the indexOf() function do?",
	answer: "returns the index of the firest occurrence of substring",
	allAnswers:["Calculates the index of the substring", 
				"Gets the index of all the index of the substring",
				"Returns the index of the firest occurrence of substring",
				"Gets the substring of the string"],
}

const twentyQuestion = {
	question: "How to remove items from an array?",
	answer: "pop()",
	allAnswers:["push()","inshift()","pop()","random[][]"],
	
	
}

const twentyOneQuestion = {
	question: "What dose the focus and blur do?",
	answer: "Color changes when the button is focused and unfocused",
	allAnswers:["Changes the color when the button id double clicked ",
				"Color changes when the button is focused and unfocused",
				"Changes the button when mouse hovers over the item ",
				"Randomly changes the color"],
	
	
}

const allQuestionObj = [
 oneQuestion,twoQuestion,threeQuestion,fourQuestion, fiveQuestion,sixQuestion,sevenQuestion,eightQuestion, nineQuestion,
 elevenQuestion, tweleveQuestion, thirteenQuestion, fourteenQuestion, fifteenQuestion, sixteenQuestion, seventeenQuestion, eighteenQuestion, 
 nineteenQuestion, twentyQuestion, twentyOneQuestion
			 
																	
];





//This gets the parts of the page
 	//This gets the buttons 
const answerOneChoice = document.querySelector(".answerOne");

const answerTwoChoice = document.querySelector(".answerTwo");


const answerThreeChoice = document.querySelector(".answerThree");

const answerFourChoice = document.querySelector(".answerFour");




//Submit button 
const buttonSubmit = document.querySelector(".submit");

const randomQuestion = document.querySelector(".printEquation");

const printResult = document.querySelector(".result");


const next = document.querySelector(".next");

	//User Score  
const userScore = document.querySelector(".score");

//const userPick = document.querySelector(".userPick");




//This is to keep the score points 
		let useScore = 0 ;	


	//Global varible to keep the correct answer 

		let correctAnswer = presentQuestion.answer;


	let questionBank = allQuestionObj;

	//This is the equation score 
			let userChoice ;

userScore.textContent = "Score:"  +  useScore; 

//userPick.textContent = userChoice;


randomQuestion.textContent = presentQuestion.question;


answerOneChoice.textContent = presentQuestion.allAnswers[0];

answerTwoChoice.textContent = presentQuestion.allAnswers[1];


answerThreeChoice.textContent = presentQuestion.allAnswers[2];


answerFourChoice.textContent = presentQuestion.allAnswers[3];




//This assign the click and function to the buttons 
	
	//This assigns the buttons for the equations 
answerOneChoice.addEventListener("click", selectOne);

answerTwoChoice.addEventListener("click", selectTwo);

answerThreeChoice.addEventListener("click", selectThree);

answerFourChoice.addEventListener("click", selectFour);

	//This assign the check button 

buttonSubmit.addEventListener("click", checkAnswer);





//This runs the functions needed to calculate and print

function selectOne(){
	userChoice = answerOneChoice.innerHTML;
	//userPick.textContent = answerOneChoice.innerHTML;
		answerOneChoice.style.background = "red";
		answerTwoChoice.style.background = "blue";
		answerThreeChoice.style.background = "blue";
		answerFourChoice.style.background = "blue";

}




function selectTwo(){
		userChoice = answerTwoChoice.innerHTML;
		//userPick.textContent = answerTwoChoice.innerHTML;
		
				answerOneChoice.style.background = "blue";
		answerTwoChoice.style.background = "red";
		answerThreeChoice.style.background = "blue";
		answerFourChoice.style.background = "blue";


}




function selectThree(){
		userChoice = answerThreeChoice.innerHTML;
		//userPick.textContent = answerThreeChoice.innerHTML;
		
				answerOneChoice.style.background = "blue";
		answerTwoChoice.style.background = "blue";
		answerThreeChoice.style.background = "red";
		answerFourChoice.style.background = "blue";


}




function selectFour(){
	userChoice = answerFourChoice.innerHTML;
	//userPick.textContent = answerFourChoice.innerHTML;
	
			answerOneChoice.style.background = "blue";
		answerTwoChoice.style.background = "blue";
		answerThreeChoice.style.background = "blue";
		answerFourChoice.style.background = "red";

}






//This is were the results are calculated and shown 
function checkAnswer(){
	
	if (correctAnswer ==userChoice){
		
		printResult.textContent = "You got it right";
		
		useScore +=1;
		
userScore.textContent = "Current score:"  +  useScore; 
	}
	
	else{
		
				printResult.textContent = "You got it wrong. The correct answer is : " + correctAnswer;
	}
	
	
	
		const lenghtQuestion =  questionBank.length;
	

			
		
	//This gets the random numbers
		const arrayPostionQuestion = Math.floor(Math.random()*lenghtQuestion)+1;
		
		//Gets the question 
		 let newPresentQuestion = questionBank[arrayPostionQuestion];
		 
		 console.log(newPresentQuestion.answer);
		 
		 let newQuestion  =  newPresentQuestion.question;
		 
		  
		 presentQuestion.question = newQuestion;
		 
		 presentQuestion.answer = newPresentQuestion.answer;
		 
		 presentQuestion.allAnswers = newPresentQuestion.allAnswers;
		 


		
	randomQuestion.textContent = presentQuestion.question;


	answerOneChoice.textContent = presentQuestion.allAnswers[3];

	answerTwoChoice.textContent = presentQuestion.allAnswers[0];


	answerThreeChoice.textContent = presentQuestion.allAnswers[1];


	answerFourChoice.textContent = presentQuestion.allAnswers[2];
	
	correctAnswer = presentQuestion.answer;
	

}











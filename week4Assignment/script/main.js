//Array of division options and answers

const presentQuestion = {
	question: "Question 0",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2","Bad Answer 3", "Answer 0"],
	
	
}

const oneQuestion = {
	question: "Question 1",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1", "Answer 0","Bad Answer 2","Bad Answer 3"],
	
	
}

const twoQuestion = {
	question: "Question 2",
	answer: "Answer 0",
	allAnswers:[ "Answer 0","Bad Answer 1","Bad Answer 2","Bad Answer 3"],
	
	
}

const threeQuestion = {
	question: "Question 3",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2","Bad Answer 3", "Answer 0"],
	
	
}
const fourQuestion = {
	question: "Question 4",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2", "Answer 0","Bad Answer 3"],
	
	
}
const fiveQuestion = {
	question: "Question 5",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2","Bad Answer 3", "Answer 0"],
	
	
}
const sixQuestion = {
	question: "Question 6",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1", "Answer 0","Bad Answer 2","Bad Answer 3"],
	
	
}

const sevenQuestion = {
	question: "Question 7",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2","Bad Answer 3", "Answer 0"],
	
	
}

const eightQuestion = {
	question: "Question 8",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1", "Answer 0","Bad Answer 2","Bad Answer 3"],
	
	
}

const nineQuestion = {
	question: "Question 9",
	answer: "Answer 0",
	allAnswers:["Bad Answer 1","Bad Answer 2","Bad Answer 3","Answer 0"],
	
	
}


const allQuestionObj = [
 oneQuestion,twoQuestion,threeQuestion,fourQuestion, fiveQuestion,sixQuestion,sevenQuestion,eightQuestion, nineQuestion
			
																	
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

const userPick = document.querySelector(".userPick");




//This is to keep the score points 
		let useScore = 0 ;	


	//Global varible to keep the correct answer 

		let correctAnswer = presentQuestion.answer;


	let questionBank = allQuestionObj;

	//This is the equation score 
			let userChoice ;

userScore.textContent = "Current score:"  +  useScore; 

userPick.textContent = userChoice;


randomQuestion.textContent = presentQuestion.question;


answerOneChoice.textContent = presentQuestion.answer;

answerTwoChoice.textContent = presentQuestion.allAnswers[0];


answerThreeChoice.textContent = presentQuestion.allAnswers[1];


answerFourChoice.textContent = presentQuestion.allAnswers[2];




//This assign the click and function to the buttons 
	
	//This assigns the buttons for the equations 
answerOneChoice.addEventListener("click", selectOne);

answerTwoChoice.addEventListener("click", selectTwo);

answerThreeChoice.addEventListener("click", selectThree);

answerFourChoice.addEventListener("click", selectFour);

	//This assign the check button 

buttonSubmit.addEventListener("click", checkAnswer);


next.addEventListener("click", nextQuestion);


//This runs the functions needed to calculate and print

function selectOne(){
	userChoice = answerOneChoice.innerHTML;
	userPick.textContent = answerOneChoice.innerHTML;
		console.log("there was a cow");

}




function selectTwo(){
		userChoice = answerTwoChoice.innerHTML;
		userPick.textContent = answerTwoChoice.innerHTML;


}




function selectThree(){
		userChoice = answerThreeChoice.innerHTML;
		userPick.textContent = answerThreeChoice.innerHTML;


}




function selectFour(){
	userChoice = answerFourChoice.innerHTML;
	userPick.textContent = answerFourChoice.innerHTML;

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
	
	
	

}


function nextQuestion(){
	

	
	
		//Get the length of one array
		//Since both of the array are the some length
	const lenghtQuestion =  questionBank.length;
	
	let userQuestionCount = 0; 
	
	if(userQuestionCount >= allQuestionObj.length ){
				printResult.textContent = "You made it to the end of the quiz. ";
		
	}
	else{
			
		
	//This gets the random numbers
		const arrayPostionQuestion = Math.floor(Math.random()*lenghtQuestion)+1;
		
		//Gets the question 
		 let newPresentQuestion = questionBank[arrayPostionQuestion];
		 
		 
		 //This gets rid of the question from the question Bank 
		 let indexCurrentQuestion  = questionBank.indexOf(newPresentQuestion);
			
		if (indexCurrentQuestion !== -1){
			questionBank.slice(indexCurrentQuestion, 1);
		}
		 
		 console.log("Question: " +newPresentQuestion.question);
		 let newQuestion  =  newPresentQuestion.question;
		 
		 
		 
		 
		 
		 presentQuestion.question = newQuestion;
		 console.log("Presented question: " + presentQuestion.question);
		 
		 presentQuestion.answer = newPresentQuestion.answer;
		 
		 presentQuestion.allAnswers = newPresentQuestion.allAnswers;
		 
		 console.log("Presented Answer: " + presentQuestion.answer);
		 

		
		randomQuestion.textContent = presentQuestion.question;


	answerOneChoice.textContent = presentQuestion.allAnswers[3];

	answerTwoChoice.textContent = presentQuestion.allAnswers[0];


	answerThreeChoice.textContent = presentQuestion.allAnswers[1];


	answerFourChoice.textContent = presentQuestion.allAnswers[2];

	userQuestionCount= userQuestionCount + 1;
	}
	
	
}








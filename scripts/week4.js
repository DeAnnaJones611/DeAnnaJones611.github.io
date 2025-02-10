//Array of division options and answers

const divEquations = [" 1 ÷ 1" ,  " 2 ÷ 1" ," 3 ÷ 1" ," 4 ÷ 1" ," 5 ÷ 1" ," 6 ÷ 1" ," 7 ÷ 1" ," 8 ÷ 1" ," 9 ÷ 1" ," 10 ÷ 1" ," 11 ÷ 1" ," 12 ÷ 1" ," 13 ÷ 1" ," 14 ÷ 1" ," 15 ÷ 1" ," 16 ÷ 1" ," 17 ÷ 1" ," 18 ÷ 1" ," 19 ÷ 1" ," 20 ÷ 1" ,

" 2 ÷ 2" ," 4 ÷ 2" ," 6 ÷ 2" ," 8 ÷ 2" ," 10 ÷ 2" ," 12 ÷ 2" ," 14 ÷ 2" ," 16 ÷ 2" ," 18 ÷ 2" ," 20 ÷ 2" ,

" 3 ÷ 3" ," 6 ÷ 3" ," 9 ÷ 3" ," 12 ÷ 3" ," 15 ÷ 3" ," 18 ÷ 3" ,

" 4 ÷ 4" ," 8 ÷ 4" ," 12 ÷ 4" ," 16 ÷ 4" ," 20 ÷ 4" ,

" 5 ÷ 5" ," 10 ÷ 5" ," 15 ÷ 5" ," 20 ÷ 5" ,

" 6 ÷ 6" ," 12 ÷ 6" ,
" 7 ÷ 7" ," 14 ÷ 7" ,
" 8 ÷ 8" ," 16 ÷ 8" ,
" 9 ÷ 9" ," 18 ÷ 9" ,
" 10 ÷ 10" ," 20 ÷ 10"];

const divAnwers = ["1" ,  "2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"10" ,"11" ,"12" ,"13" ,"14" ,"15" ,"16" ,"17" ,"18" ,"19" ,"20" ,

" 1" ,"2" ,"3" ,"4" ,"5" ,"6" ," 7" ,"8" ,"9" ," 10" ,

"1" ,"2" ,"3" ,"4" ,"5" ," 6" ,

"1" ,"2" ,"3" ,"4" ,"5" ,

"5" ,"2" ,"3" ,"4" ,

"1" ," 2" ,
"1" ,"2" ,
"1" ,"2" ,
"1" ,"2" ,
"1" ,"2"  ];



//This gets the parts of the page
 	//This gets the buttons 
const buttonAdditon = document.querySelector(".addition");

const buttonSubtraction = document.querySelector(".subtraction");

const buttonMultiplcation = document.querySelector(".multiplication");


const buttonDivsion = document.querySelector(".division");

const buttonSubmit = document.querySelector(".submit");


	//This is where printing out parts of the page

const equationPrint = document.querySelector(".printEquation");

 
const printResult = document.querySelector(".result");



	//User input 
const userAnswerObj = document.querySelector("input");

	
	//Global varible to keep the 

let correctAnswer;




//This assign the click and function to the buttons 
	
	//This assigns the buttons for the equations 
buttonAdditon.addEventListener("click", getAddition);

buttonSubtraction.addEventListener("click", getSubtraction);

buttonMultiplcation.addEventListener("click", getMultiplication);

buttonDivsion.addEventListener("click", getDivision);

	//This assign the check button 

buttonSubmit.addEventListener("click", checkAnswer);


//This runs the functions needed to calculate and print

function getAddition(){

	//This gets the random numbers
	const numOne = Math.floor(Math.random()*10)+1;
	const numTwo = Math.floor(Math.random()*10)+1;

	//This calculates the eqaution 
	correctAnswer = numOne +  numTwo;

	//This assigns the equation to show to the screen 
	equationPrint.textContent = numOne + " +  " + numTwo;

	//This resets the result text
	printResult.textContent = "Result will show";
	

}




function getSubtraction(){
	//This gets the random numbers
	const numOne = Math.floor(Math.random()*10)+1;
	const numTwo = Math.floor(Math.random()*10)+1;
	
	//This makes the needed varibles 
	let largeNum = 0;	
	let smallNum = 0;

	//This makes the assing the random number to be larger and smaller varibles
		//This is to make sure the answer will not be negitive 
	if (numOne > numTwo){
		 largeNum = numOne;
		 smallNum = numTwo;

		}
	else{
		 largeNum = numTwo;
		 smallNum = numOne;
		}
	

	//This calculets the new eqautaion 
	correctAnswer = largeNum -  smallNum;


	//This prints out the equation to the screen 
	equationPrint.textContent = largeNum + " -  " + smallNum;


	
	//This resets the result text
	printResult.textContent = "Result will show";
	

}




function getMultiplication(){
		//This gets the random numbers
	const numOne = Math.floor(Math.random()*10)+1;
	const numTwo = Math.floor(Math.random()*10)+1;

	//This calculates the eqaution 
	correctAnswer = numOne *  numTwo;
	//console.log("Number one" + numOne + "Number two: " +numTwo+ " Added together: " +numAnswer);


	//This assigns the equation to show to the screen
	equationPrint.textContent = numOne + "  x " + numTwo;


	
	//This resets the result text
	printResult.textContent = "Result will show";

}




function getDivision(){

	//Get the length of one array
		//Since both of the array are the some length
	const number = divEquations.length;
	//This gets the random numbers
		const arrayPostion = Math.floor(Math.random()*number)+1;


	//Gets the equations and answer
			//Get the equation 
		const divsionEquation = divEquations[arrayPostion];
			//Get the answer and converts it into a number 
		correctAnswer = Number(divAnwers[arrayPostion]);


	//This assigns the equation to show to the screen
	equationPrint.textContent = divsionEquation;	

	
	//This resets the result text
	printResult.textContent = "Result will show";

}






//This is were the results are calculated and shown 
function checkAnswer(){
	
		//Gets the user answer
	const userNum = userAnswerObj.value;

		//Resets the user input 
	userAnswerObj.value = "";
	userAnswerObj.focus();


//This is user input checking 
		//If there is no question
			//Then the text is shown 
	if (equationPrint.textContent == ""){
		printResult.textContent = "Please choose an equation type.";
	}
	
		//Else the other code is ran 
	else{

			//If the user input is empty tells the user they need to answer the question
		if(userNum == ""){
			printResult.textContent = "Please enter an answer for the Equation.";
		}

	
			//Else runs the other code
		else{

			//Then checking wether or not the user inputted the right answer
			if (userNum == correctAnswer){
				//Text printed if correct
				printResult.textContent = "You got it right";
			}
			else{

				//Text printed if incorrect
				printResult.textContent = "You got it wrong. The correct answer is : " + correctAnswer;	
			}
			//Once answer is checked: Equation rest
			equationPrint.textContent = "";

	}

}

}








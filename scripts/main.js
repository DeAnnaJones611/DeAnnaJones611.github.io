
/*
How to do the group comments
*/

//How to do a single line comment 


/*
This adds a personal message to the screen
*/
/*let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


//This is used to set the name that is entered by the user 
function setUserName(){
	const myName = prompt("Please  enter your name.");

	if(!myName){
		setUserName();
	}

	else{
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}


//If there is nothing then the user is prompted to input one 
if(!loaclStorage.getItem("name")){
	setUserName();
} else{
	const storeName = localStorage.setItem("name");
	myHeading.textConten = `Mozilla is cool, ${storedName}`;

}


//This code is run when the button is pressed
myButton.addEventListener("click", () =>{
	sestUserName();
});

*/


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}



if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}



myButton.addEventListener("click", () => {
  setUserName();
});






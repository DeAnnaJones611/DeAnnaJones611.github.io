//This is the java script for the tutorial one 
	//This is to allow the user to input a name and it is printed on the screen 



//This changes the images
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox_2ndIcon.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});



//Varible used to get the infomation from the website page
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//The function that prompts the user to enter a name
function setUserName() {
  const myName = prompt("Please enter your name.");
	//If nothing is entered then it is called again
  if (!myName) {
    setUserName();
  } else {
	  //Stores the input for the memory
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


//If nothing in local storage then calls the function
if (!localStorage.getItem("name")) {
  setUserName();
} else {

	//Else always printing the name and text in the header 
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


//Then the button is clicked then the funtion is called.
myButton.addEventListener("click", () => {
  setUserName();
});






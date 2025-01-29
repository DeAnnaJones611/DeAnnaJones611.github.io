//This is the java script for the tutorial one 
	//This is to allow the user to input a name and it is printed on the screen 



//This changes the images
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
	console.log("there");
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


//This is week 2 Java script



const arrayImage = [ "images/pic1.png"  , "images/pic2.png" , "images/pic3.png"  , "images/pic4.png" ];

let  thumbNail = document.querySelector('.thumb-bar');

let imageCount = 0;

for (const image of arrayImage){
	singleImage = image;
	let tempImage = imageCount.toString();
	let newImage = document.createElement("img");
	newImage.src = singleImage;
	newImage.id =  "Image" + tempImage;
	document.getElementById("thumbNail").appendChild(newImage);
	imageCount+= 1;
 
}

const imageOne = document.querySelector("#Image0");
imageOne.addEventListener("click", (event) => {changeImage(0)});

const imageTwo = document.querySelector("#Image1");
imageTwo.addEventListener("click", (event) => {changeImage(1)});


const imageThree = document.querySelector("#Image2");
imageThree.addEventListener("click", (event) => {changeImage(2)});

const imageFour = document.querySelector("#Image3");
imageFour.addEventListener("click", (event) => {changeImage(3)});



function changeImage(index){
	const mainImage = document.querySelector("#full-img img");
	mainImage.src = arrayImage[index];
}



//This isn't working correct 
	//Only changing the word to dark to light, but not the way back
const mainButton = document.querySelector("#full-img button");

let buttonType = mainButton.getAttribute("class");


if (buttonType === "light"){
	mainButton.addEventListener("click", (event) => {lightChange()});
}

if(buttonType === "dark"){
	mainButton.addEventListener("click", (event) => {darkChange()});
}



function lightChange(){
	mainButton.classList.remove("light");
	mainButton.setAttribute("class", "dark");
	mainButton.textContent = "dark";
	//overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
	console.log("Light change" + buttonType);

}


function darkChange(){
	mainButton.classList.remove("dark");
	mainButton.classList.add("light");
	//mainButton.setAttribute("class", "light");
	mainButton.textContent = "light";
	//overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
	buttonType =mainButton.getAttribute("class");
	console.log("Dark change: " + buttonType);
}






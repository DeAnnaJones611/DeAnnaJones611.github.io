function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const eleSection1 = document.getElementById("section1");
	 const eleSection2 = document.getElementById("section2");
	const eleSection3 = document.getElementById("section3");
	const eleSection4 = document.getElementById("section4");
	
	
		

    // Add the ondragstart event listener
    eleSection1.addEventListener("dragstart", dragstartHandler);

		eleSection1.textContent = classSectionOne.name;

	
	
	eleSection2.addEventListener("dragstart", dragstartHandler);
	//eleSection2.addEventListener("click", displayInfo(classSectionTwo));
		eleSection2.textContent = classSectionTwo.name;
	
	
	
	eleSection3.addEventListener("dragstart", dragstartHandler);
	//eleSection3.addEventListener("click", displayInfo(classSectionThree));
		eleSection3.textContent = classSectionThree.name;
	
	
	eleSection4.addEventListener("dragstart", dragstartHandler);
	//eleSection4.addEventListener("click", displayInfo(classSectionFour));
		eleSection4.textContent = classSectionFour.name;
	
  });
  
  
  function dragstartHandler(ev) {
  // Add different types of drag data
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}

function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
  
}





	//These are all the courses displayed
	
	const classSectionOne = createCourse("Class Name 1" , ["pre.1_1",  "pre.1_2",  "pre.1_3"], "this is des for 1");
	
	const classSectionTwo = createCourse("Class Name 2" , ["pre.2_1",  "pre.2_2",  "pre.2_3"], "this is des for 2");
		
	const classSectionThree = createCourse("Class Name 3" , ["pre.3_1",  "pre.3_2",  "pre.3_3"], "this is des for 3");
			
	const classSectionFour = createCourse("Class Name 4" , ["pre.4_1",  "pre.4_2",  "pre.4_3"], "this is des for 4");
		//Function to create an object 
	function createCourse(name, pre, des){
		const obj = {};
		obj.name = name;
		obj.pre = pre;
		obj.des = des;
		
		return obj;
	
	}
	const eleDisplayInfo = document.getElementById("displayInfo");	
	//This gets all the divs
	
	 const section1Button = document.getElementById("class1");
	 	section1Button.addEventListener("click" , displayInfo(classSectionOne));		
	 
	 
	const section2Button = document.getElementById("class2");
		section2Button.addEventListener("click" , displayInfo(classSectionTwo));	
	
	//const eleSection3 = document.getElementById("section3");
	//const eleSection4 = document.getElementById("section4");
	


	
	
	//eleSection1.addEventListener.click(displayInfo(classSectionOne));
	
	//eleSection2.addEventListener("click", displayInfo(classSectionTwo));
		
	//eleSection3.addEventListener("click", displayInfo(classSectionThree));
		
	//eleSection4.addEventListener("click", displayInfo(classSectionFour));



	function displayInfo(obj){
		// This makes the alert of the infromation 
		
		
		eleDisplayInfo.textContent = "Name: " + obj.name +`\n  Description: ` + obj.des + "\n Prerquisite: " + obj.pre;
	
	}



  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
  
  
  
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
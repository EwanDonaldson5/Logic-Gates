/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*Function to swap the div's displayed on screen */
function show() { 
    if(document.getElementById('docDisplay').style.display=='none') { 
        document.getElementById('docDisplay').style.display='block'; 
        document.getElementById('imageDisplay').style.display='none';
    } 
    return false;
} 

function hide() { 
    if(document.getElementById('imageDisplay').style.display=='none') { 
        document.getElementById('imageDisplay').style.display='block'; 
        document.getElementById('docDisplay').style.display='none';
    } 
    return false;
}   


/*--------------------------------------------------------------------------------------------*/
/*Javascript code for the animation of the tests*/

var canvas;
var AND_question1 = "empty";

function ANDsubmitAnswers() {
	/*Defining variables with the answers inserted by the user*/
	var ANDanswer1 = document.getElementById("AND_question1_inputbox").value;
	var ANDanswer2 = document.getElementById("AND_question2_inputbox").value;
	var ANDanswer3 = document.getElementById("AND_question3_inputbox").value;
	/*Answer checking for question1*/
	if(ANDanswer1 == '0'){/*If this is correct*/
		canvas = document.getElementById("ANDcanvas1");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ANDcanvas1");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question2*/
	if(ANDanswer2 == '0'){/*If this is correct*/
		canvas = document.getElementById("ANDcanvas2");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ANDcanvas2");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question1*/
	if(ANDanswer3 == '1'){/*If this is correct*/
		canvas = document.getElementById("ANDcanvas3");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ANDcanvas3");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
}

function ORsubmitAnswers() {
	/*Defining variables with the answers inserted by the user*/
	var ORanswer1 = document.getElementById("OR_question1_inputbox").value;
	var ORanswer2 = document.getElementById("OR_question2_inputbox").value;
	var ORanswer3 = document.getElementById("OR_question3_inputbox").value;
	/*Answer checking for question1*/
	if(ORanswer1 == '1'){/*If this is correct*/
		canvas = document.getElementById("ORcanvas1");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ORcanvas1");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question2*/
	if(ORanswer2 == '1'){/*If this is correct*/
		canvas = document.getElementById("ORcanvas2");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ORcanvas2");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question1*/
	if(ORanswer3 == '1'){/*If this is correct*/
		canvas = document.getElementById("ORcanvas3");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("ORcanvas3");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
}

function NANDsubmitAnswers() {
	/*Defining variables with the answers inserted by the user*/
	var NANDanswer1 = document.getElementById("NAND_question1_inputbox").value;
	var NANDanswer2 = document.getElementById("NAND_question2_inputbox").value;
	var NANDanswer3 = document.getElementById("NAND_question3_inputbox").value;
	/*Answer checking for question1*/
	if(NANDanswer1 == '1'){/*If this is correct*/
		canvas = document.getElementById("NANDcanvas1");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NANDcanvas1");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question2*/
	if(NANDanswer2 == '1'){/*If this is correct*/
		canvas = document.getElementById("NANDcanvas2");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NANDcanvas2");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question1*/
	if(NANDanswer3 == '0'){/*If this is correct*/
		canvas = document.getElementById("NANDcanvas3");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NANDcanvas3");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
}

function NORsubmitAnswers() {
	/*Defining variables with the answers inserted by the user*/
	var NORanswer1 = document.getElementById("NOR_question1_inputbox").value;
	var NORanswer2 = document.getElementById("NOR_question2_inputbox").value;
	var NORanswer3 = document.getElementById("NOR_question3_inputbox").value;
	/*Answer checking for question1*/
	if(NORanswer1 == '0'){/*If this is correct*/
		canvas = document.getElementById("NORcanvas1");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NORcanvas1");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question2*/
	if(NORanswer2 == '0'){/*If this is correct*/
		canvas = document.getElementById("NORcanvas2");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NORcanvas2");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
	/*Answer checking for question1*/
	if(NORanswer3 == '1'){/*If this is correct*/
		canvas = document.getElementById("NORcanvas3");/*Set the selected canvas to canvas1*/
		correct();/*Run the function to input a tick into the selected canvas*/
	}else{/*If this is wrong*/
		canvas = document.getElementById("NORcanvas3");/*Set the selected canvas to canvas1*/
		wrong();/*Run the function to insert a cross into the selected canvas*/
	}
}

function correct() { 
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,75,75);
	ctx.beginPath();
	ctx.moveTo(5, 50);
	ctx.lineTo(25, 70);
	ctx.lineWidth = 10;
	ctx.strokeStyle = "green";
	ctx.stroke();
	ctx.lineTo(65, 5);
	ctx.stroke();
}
  
function wrong() {
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,75,75);
	ctx.beginPath();
	ctx.moveTo(5, 5);
	ctx.lineTo(70, 70);
	ctx.lineWidth = 10;
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.moveTo(5, 70);
	ctx.lineTo(70, 5);
	ctx.stroke();
}
                        
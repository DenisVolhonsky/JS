//onkeydown
//onkeypress
//onkeyup


// document.onkeydown=function(event) {
// 	//console.log(event);
// 	simple.innerHTML += event.key;

// }


var posX=8, posY=8;

document.onkeydown = function(event) {
	console.log(event.keyCode);
	
   if(event.keyCode == 39) {  
   	posX=posX+60;
   	document.getElementById('simple').style.left = posX +'px'; 
   }
   
   else if(event.keyCode == 40) {     
   	posY=posY+60;
   	document.getElementById('simple').style.top = posY +'px'; 
   }

   else if (event.keyCode == 38) {  
   	posY=posY-60;
   	document.getElementById('simple').style.top = posY +'px'; 
   }

   else if (event.keyCode == 37) {
   	posX=posX-60;
   	document.getElementById('simple').style.left = posX +'px'; 
   }

}	



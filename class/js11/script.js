document.querySelector('.one').onmousedown = function (){
	this.style.background = 'red';
	console.log(this);
}

document.querySelector('.one').onmouseup = function (){
	this.style.background = 'gold';
}

document.querySelector('.one').ondblclick = function (){
	this.style.background = 'lime';
}
document.querySelector('.two').onmouseenter = function (){
	this.style.background = 'red';
}
document.querySelector('.two').onmouseleave = function (){
	this.style.background = 'none';
}
document.querySelector('.tree').oncontextmenu = function (e){  // нажатие правой кнопкой мыши
	e = e || window.e; //перестрах для разных брауз
	e.preventDefault(); //запретить брауз любое действие которое на  этом событитие
	this.style.background = 'cyan';
}

// вообще запретить нажатие правой кнопки в браузере
// document.oncontextmenu = function (e){
// 	e = e || window.e; //перестрах для разных брауз
// 	e.preventDefault(); //запретить брауз любое действие которое на  этом событитие
// 	// this.style.background = 'cyan';
// }

var a = 0;
document.querySelector('.five').onmousemove = function (){
	this.style.background = 'rgb(50,50,'+ a +')'; //или
	// this.style.background = `rgb(50,50,${a})`;
	a++;
}

document.querySelector('.six').onclick = function (e){
	console.log(e.offsetX);	
}


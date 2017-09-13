var navDiv = document.querySelectorAll('nav div'); // массив

// div.onclick = fillDiv;
for(var i=0; i<navDiv.length; i++) {
	navDiv[i].onmouseenter = showMenu;
	navDiv[i].onmouseleave = hideMenu;
}

//--------описание функции-----------//
function showMenu() {
	this.getElementsByTagName('ul')[0].style.display='block';
}

function hideMenu() {
	this.getElementsByTagName('ul')[0].style.display='none'; 
}

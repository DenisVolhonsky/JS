document.querySelector('#adme').onmousemove = function(event) {
	event = event || window.event;
	var x = event.offsetX;
	document.querySelector('.bottom').style.width = x +'px';
}
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var img = document.getElementById('bmw');

block1.onmouseenter = function() {
    img.style.top = -402 +'px';
    img.style.left = 0;
    img.style.display='block';
};
block2.onmouseenter = function() {
    img.style.top = 0;
    img.style.left = -402 +'px';
    img.style.display='block'
};
block4.onmouseenter = function() {
    img.style.top = 0;
    img.style.left = 402 +'px';
    img.style.display='block';
};
block5.onmouseenter = function() {
    img.style.top = 402 +'px';
    img.style.left = 0;
    img.style.display='block'
};
document.getElementById('block3').onmouseover = function(event) {
    event = event || window.event;
    if (event.relatedTarget === block1 || event.relatedTarget === block5) {
        img.style.transition = 1 + 's';
        img.style.top = 0;
    }
    if (event.relatedTarget === block2 || event.relatedTarget === block4) {
        img.style.transition = 1 + 's';
        img.style.left = 0;
    }
};



// Задание 1. Выведите координаты мыши относительно блока в момент
// движения курсора мыши внутри блока. Координаты выводить под блоком. 

document.querySelector('.one').onmousemove = function (e){
	var out = document.getElementById('out');
	out.innerHTML = 'X= ' +e.offsetX +', Y='+ e.offsetY +';';
}

// Задание 2. Создайте блок div, в качестве изображения фона установите
// ему изображение закрытой папки. Добавьте событие, которое выполняется
// при двойном клике на блоке и заменяет фон блока на изображение
// открытой папки.
var i=0;
document.querySelector('.folder').onclick = function (){
 	if(i==0){
 	this.style.background = 'url(folder1.png)';
 	this.style.backgroundSize='100% 100%';
 	i=1;
 	}
 	else{
 	this.style.background = 'url(folder.png)';
 	this.style.backgroundSize='100% 100%';
 	i=0;
 	}
}


// Задание 3. Добавьте в документ 300-400 блоков div квадратной формы с
// размерами сторон 30px, и цветом фона. Добавление элементов выполните
// с помощью цикла. Добавьте событие при наведении мыши, которое будет
// скруглять данные блоки с помощью border-radius до круга. (Для
// замедления эффекта скругления в CSS можно добавить transition).

var block = document.querySelector('.first');
	for(var i=0; i<400; i++) {
		block.innerHTML+='<div class="block"></div>';	
	}

var list = document.querySelectorAll('.block');
	for(var i=0; i<list.length; i++) {
		list[i].onmousemove = function() {
	    	this.style.borderRadius = 15 +'px';
	    	this.style.transition = 'all ease 1s';
	    	}
	    } 


// Задание 4. Создайте div размерами ширина – 100%, высота 250px. Ниже
// добавьте 4-5 изображений с одинаковыми классами, разного размера.
// Добавьте событие, которое будет при клике на изображении
// устанавливать его фоном блока div со свойством background-size: contain.

document.onclick = function(event) {
	if(event.target.className == 'm-img') {
		changeImg(event.target);
	}
}

function changeImg(t) {
	document.querySelector('#main').src = t.src;
	}

// Задание 5. Создайте блок размерами 50x50px. Добавьте событие клик, так,
// что при каждом клике на блоке он отодвигается на 100px вниз от
// предыдущего положения.

var posX=0;
document.querySelector('.move-block').onclick = function() {
	posX=posX+100;
	this.style.left = posX +'px';

}	 
		





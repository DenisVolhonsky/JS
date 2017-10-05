//https://developer.mozilla.org/ru/docs/Web/API/Element/classList

// var div=document.querySelector('.one');
 // div.classList.add('five', 'six'); //добавить класс
// console.log(div.classList);
// div.classList.remove('one'); //удалить класс
// if(div.classList.contains('main')) //проверка содержит класс 
// 	console.log('содержит');

// div.classList.toggle('main'); //включает и выключает класс повторный вызов
// div.classList.toggle('main');

// Задача. Добавьте всем изображениям на странице класс bordered в
// оформлении которого содержится граница и тень.

// Задача. Добавьте изображениям, по которым кликнул пользователь, класс
// bordered в оформлении которого содержится граница и тень.

var img = document.getElementsByTagName('img');	
	for(i=0; i<img.length; i++) {
		img[i].onclick = function() {
			this.classList.toggle('bordered');
		}			
	}

// Задача. Создайте с помощью JS несколько блоков. Четным блокам
// добавьте класс bordered. Добавьте на все блоки событие клика. При клике
// удаляйте класс bordered. Обратите внимание, что происходит если клик
// осуществляется по элементу без данного класса.

for(var i=0; i<5; i++) {
	var div = document.createElement('div');
	div.innerHTML=i;
	if(i%2==0) {
		div.classList.add('bordered');
	}
	document.body.appendChild(div);
	div.onclick = function() {
		this.classList.remove('bordered');	
	}				
}
















































































































// var selectorClass = document.getElementsByClassName('selectorClass')[0];
// console.log(selectorClass.className);
// console.log(selectorClass.classList.contains('selectorClass'));
// selectorClass.classList.add('selectorClass123');
// console.log(selectorClass.className);
// selectorClass.classList.remove('selectorClass123');
// console.log(selectorClass.className);
// btn.onclick = function(){
//     selectorClass.classList.toggle('selectorClass123');
// }







// доп. материалы - https://developer.mozilla.org/ru/docs/Web/API/Element/classList

// var div = document.querySelector('.one');

// div.classList.add('five', 'six'); //добавить класс
// console.log(div.classList);

// div.classList.remove('one'); //удалить класс
// if(div.classList.contains('main')) //проверка содержит класс 
// 	console.log('содержит');

// div.classList.toggle('main'); //включает и выключает класс повторный вызов
// div.classList.toggle('main');

// Задача1. Добавьте всем изображениям на странице класс bordered в
// оформлении которого содержится граница и тень.
// Задача2. Добавьте изображениям, по которым кликнул пользователь, класс
// bordered в оформлении которого содержится граница и тень.
//
// var img = document.getElementsByTagName('img');
// 	for(var i=0; i<img.length; i++) {
// 		img[i].onclick = function() {
// 			this.classList.toggle('bordered');
// 		}
// 	}

	document.onclick = function(event){
	event = event||window.event;
	if(event.target.tagName =='IMG')
		event.target.classList.toggle('bordered');
	}

// Задача3. Создайте с помощью JS несколько блоков. Четным блокам
// добавьте класс bordered. Добавьте на все блоки событие клика. При клике
// удаляйте класс bordered. Обратите внимание, что происходит если клик
// осуществляется по элементу без данного класса.
for(var i=0; i<10; i++) {
	var div = document.createElement('div');
	div.classList.add('sizing');
	div.innerHTML = i;
    var elem = document.getElementById('node');
    elem.appendChild(div);
	if(i%2==0) div.classList.add('bordered');
	div.onclick = function() {
		this.classList.remove('bordered');
	}
}

// Задача4. Выведите в консоль количество элементов, которые имеют класс bordered.
document.getElementById('calcBordered').onclick = function() {
    var count = document.querySelectorAll('.bordered');
	console.log('На данный момент на странице '+ count.length +' елемент(ов) имеют класс "bordered"' );
}

// Задача5. Создайте два класса: red и blue. Каждый класс заливает элемент
// соответствующим цветом. Напишите скрипт, который при клике меняет
// класс red на blue и наоборот.
document.getElementById('color').onclick = function () {
		this.classList.toggle('blue');
}

// Задача6. Напишите аккордеон. Используя верстку представленную ниже
// задайте класс min высоту элемента так, чтобы было видно только
// заголовок h1.
// Создайте скрипт, который при клике удаляет класс min (если он есть у
// элемента) или добавляет его если его нет. При этом текст находящийся в
// параграфе будет скрываться или становится видимым.


var min = document.getElementsByClassName('min');

    for (var i=0; i<min.length; i++) {
        min[i].onclick = function () {
            this.classList.toggle('min');

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







// Задание 1. Напишите функцию, которая выводит в консоль слово 'Hello’.
// Запустите функцию 333 раза.

function hello333() {
	console.log('Hello');
}
for (var i=0; i<333; i++) {
	hello333();
}

// Задание 2. Напишите функцию, которая возвращает произведение двух
// указанных в качестве параметра чисел.

function twoParam(a,b) {
	console.log(a*b);
}
twoParam(3,4);

// Задание 3. Напишите функцию, которая находит и возвращает максимум
// из двух, заданных в качестве параметров чисел. Подсказка
function maxParam(a,b) {
	console.log(Math.max(a,b));
}
maxParam(3,6);

// Задание 1. Напишите функцию, которая возвращает сумму элементов
// массива. Сам массив (индексный) указан в качестве параметра при запуске
// функции.

var mas=[3,5,7,9,10];
function sumElem(a) {	
	var s=0;
	for(i=0; i<a.length; i++){
		s=s+a[i];
	}
	return s;
}

console.log(sumElem(mas));
console.log(sumElem([3,5]));


// Задание 2. Напишите функцию, которая выводит указанный в качестве
// параметра массив, в указанный в качестве параметра объект со страницы.

var mas=[5,5];
function array(param) {
	var s=0;
	for(i=0; i<param.length; i++){
		s=s+param[i];
	}
	return s;
}
document.getElementById('out1').innerHTML=array(mas);	

// Задание 3. Напишите функцию, которая принимает в качестве параметра
// массив чисел (24 числа) и возвращает среднее арифметическое массива. 

var mas=[3,5,8];
function sumElem(a) {	
	var s=0;
	for(i=0; i<a.length; i++){
		s=(s+a[i]);
	}
	return s/a.length;
}

console.log(sumElem(mas));

// Задание 4. Напишите функцию, которая принимает два параметра (числа)
// и возвращает случайное число между заданными двумя. 


function randomElem(a,b) {	

	var s = Math.max(a,b);
	return s;
}

console.log(randomElem(8,5));










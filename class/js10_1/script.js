//Начальный уровень

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
	console.log('Произведение:'+ a*b);
}
twoParam(3,4);

// Задание 3. Напишите функцию, которая находит и возвращает максимум
// из двух, заданных в качестве параметров чисел. Подсказка
function maxParam(a,b,c) {

	console.log('Макс елемент: '+ Math.max(a,b,c));
}
maxParam(3,6,9);

//Средний уровень


// Задание 1. Напишите функцию, которая возвращает сумму элементов
// массива. Сам массив (индексный) указан в качестве параметра при запуске
// функции.

var mas=[3,5,7,9,10];
function sumElem(a) {	
	var sum=0;
	for(i=0; i<a.length; i++){
		sum=sum+a[i];
	}
	return sum;
}

console.log('Сумма елементов массива: '+ sumElem(mas));  
console.log('Сумма елементов массива: '+ sumElem([3,5])); 


// Задание 2. Напишите функцию, которая выводит указанный в качестве
// параметра массив, в указанный в качестве параметра объект со страницы.

var mas=[5,10,20];
function array(param) {
	return param;
}

document.getElementById('out1').innerHTML='['+ array(mas) +'];';	

// Задание 3. Напишите функцию, которая принимает в качестве параметра
// массив чисел (24 числа) и возвращает среднее арифметическое массива. 

var mas=[3,5,8];
function average(a) {	
	var s=0;
	for(i=0; i<a.length; i++){
		s=(s+a[i]);
	}
	return s/a.length;
}

console.log('Средний элемент массива: ['+ mas+'] = '+average(mas).toFixed(2));

// Задание 4. Напишите функцию, которая принимает два параметра (числа)
// и возвращает случайное число между заданными двумя. 

function randomElem(min,max) {	

	var result = Math.floor((Math.random()*(max-min))+min);

	console.log('Случайное число от '+ min +' до '+ max +' равно '+ result);

 	return result;  
}
randomElem(0,10);

//Высокий уровень

// Задание 1. Напишите функцию, которая находит и возвращает максимум
// из двух, заданных в качестве параметров чисел. Если введено одно число –
// то функция возвращает ошибку «Error! Задано одно число».

function maxElement(x1,x2,x3,x4,x5) {
	var max=arguments[0];
	for(i=0; i<arguments.length; i++) {

		if(max<arguments[i]) {
			max=arguments[i];
		}
	}
    console.log('Максимальный елемент массива: '+ max);
}
maxElement(10,2,100,7,5);

// Задание 2. Напишите функцию, в качестве параметра которой передается
// ассоциативный массив (объект). Функция возвращает копию данного
// объекта. 

var mas = {
	"name": "Denis",
	"age": 33,
	"sex": "male" 
}

function copyArr(mas1) {

	for(var key in mas) {
		mas1[key]=mas[key];
	}
	
	console.log(mas1);
	console.log(mas);
	
}

copyArr(mas); 


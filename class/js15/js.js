//Get symbol

//     var str = 'lorem ipsum';
//     console.log(str.charAt(3));
//     console.log(str[3]);

   //transform from unicode

//     var res = String.fromCharCode(100)
//     console.log(res);
//     console.log('c'.charCodeAt(0));

   //Concat
//     var str1 = 'lorem';
//     var str2 = 'ipsum';
//     var res = str1.concat(str2);
//
//     var res = ''.concat(str2, ' ', str2, str1);
//    console.log(res);

   //find word

//     var str = 'Hello World! Welcome to the welcome.';
//     var n = str.endsWith('welcome.');
//     console.log(n);

//     var str = 'Hello World! Welcome to the welcome';
//     var n = str.startsWith('Hello'); //true/false
//     console.log(n);

//     var str = 'Hello World! Welcome to the welcome'
//     var n = str.includes('World');
//     console.log(n);

//     var str = 'Hello World! Welcome to the welcome'
//     var n = str.indexOf('Welcome');
//     console.log(n);

//     var str = 'Hello World! welcome to the welcome'
//     var n = str.lastIndexOf('welcome');
//     console.log(n);

//     var str = 'Hello World';
//     console.log(str.repeat(10));

//     var str = 'visit Microsoft! Microsoft Microsoft';
//     var res = str.replace(/Microsoft/g, 'W3S');
//     console.log(res);

//     var str = 'visit Microsoft!';
//     var n = str.search('Microsoft');
//     console.log(n);

//     var str = 'Helloworld!';
//     var res = str.slice(1, 5);
//     console.log(res);

//     var str = 'sfgjh sjfhg sjhg ';
//     var res = str.split(' ');
//     console.log(res);
//     console.log(res.join(';'));

//     var str = 'Hello world!';
//     var res = str.substr(6, 3);
//     console.log(res);

//     var str = 'HELLO WORLD!';
//     var res = str.toLowerCase();
//     console.log(res);

//     var str = 'Hello world!';
//     var res = str.toUpperCase();
//     console.log(res);

//     var str = 123;
//     console.log(typeof str);
//     var res = str.toString();
//     console.log(typeof res);
//    var arr = [];
//    console.log(typeof arr);


//     var str = '           Hello world!                 ';
//     console.log(str.trim());

//     var str = 'Hello World, WELCOME to the welcome';
//     console.log(str.match(/welcome/ig));
//
//     var str = 'Hello World, WELCOME to the welcome';
//     console.log(str.search(/welcome/i));




// Напишите функцию checkSpam(str), которая возвращает true, 
// если строка str содержит „viagra“ или „XXX“, а иначе false.

var a = ' XXX viagra or dsfds;dskfk ksdfk';
function checkSpam(str) {	
	if(str.search(/viagra/i) != -1 || str.search(/xxx/i) != -1) return true;
	else return false;
}
console.log(checkSpam(a));

// Создайте функцию truncate(str, maxlength), 
// которая проверяет длину строки str, и если она превосходит maxlength
//  – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка.
// Например: // truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
// truncate("Всем привет!", 20) = "Всем привет!"

// Это почитать дома   https://htmlweb.ru/java/string.php

function truncate(str, maxlength) {
	if(str.length>maxlength) return str.slice(0, maxlength-str.length) +'...';
	else return str;
}
console.log('truncate(a, 21)='+ truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));


// Создайте инпут. Реализовать метод, который не будет позволять уход с инпута до тех пор,
// пока строка, введенная в него не будет равна 10 и при каждой попытке уйти с инпута выводить
// сообщение с кол-вом символов введенной строки

inp.onblur = function() {
	if(this.value.length != 10) {
		console.log('Введите строку равную 10 символов! Вы ввели: '+ this.value.length);
		inp.focus();
	}
	
	else inp1.focus();		
}

// Реализовать проверку инпута. Введенные символы должны быть только латинскими
inp1.onblur = function() {

	var inp1 = document.getElementById('inp1').value;
	var rez = inp1.match(/^[a-zA-Z]+$/);
	if(rez == null) console.log('Введите имя латинскими буквами!');
	else console.log('Validation OK!');
} 




// создать инпут для ввода номера телефона. Проверить на ввод только числового значения.
//  Проверить на кол-во символов. И если символов и отсеять 380 с номера телефона


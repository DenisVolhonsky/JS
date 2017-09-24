
// Тестовое задание - калькулятор:
// - с возможностью удаления, умножения, суммы и разницы;
// - который понимает длинные выражения;
// - учитывает приоритет операторов и приоритет скобок (то есть можно
// записать что-то вроде 3 + 2 * 4 + (6 - 2) / 3
// - вложенные скобки тоже должны работать;
// - приятный интерфейс;
// - реализация не через внутренний парсер js, eval, new function.
// Нас интересует реализация самого парсера, обработка арифметических выражений.



document.onclick = function(event) {

	event = event || window.event; //оптимизация под разные браузеры

	if(event.target.value == undefined) 
	  event.preventDefault(); // если value не определено запрещаем любое действие
	else var data = document.getElementById('inp').value += event.target.value; //иначе вывадим в input


	 ///////// если eval :-) ////////////////////////
	 document.getElementById('result').onclick = function (){
	 	document.getElementById('inp').value = eval(data);
	 }
	




			
			
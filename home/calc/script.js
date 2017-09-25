
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


	 // ///////// если eval :-) ////////////////////////

	 // document.getElementById('result').onclick = function (){
	 // 	document.getElementById('inp').value = eval(data);
	 // }
	
	
	var rez;

	for(i=0; i<data.length; i++) {  
//////////// действия в скобках////////////////////////
		if(data[i] =='(' && data[i+4] ==')') {  
			if(data[i+2]== '*') {
				rez+=data[i+1]*data[i+3];  
			}
			else if(data[i+2]== '/') {	
				rez+=data[i+1]/data[i+3];
			}
			else if(data[i+2]== '+') {		
				rez+=data[i+1]+data[i+3];
			}
			else if(data[i+2]== '-') {		
				rez+=data[i+1]-data[i+3];
			}
		} 
//////////////////отператоры *,/,+,- //////////////////////
		else if(data[i] == '*') {   
			rez+=data[i-1]*data[i+1];
		}
		else if (data[i] == '/') {
			rez+=data[i-1]/data[i+1];
		}
		else if (data[i] == '+') {
			rez+=data[i-1]+data[i+1];
		}
		else if (data[i] == '-' && data[i-1] != null) {
			rez+=data[i-1]-data[i+1];
		}
/////////////////////если число отрицательное///////////////////
		else if (data[i] == '-' && data[i] == null) {
			rez+=data[i]*(-1);
		}
	}
 	console.log(rez); 
}
	
  


// function mult() {
// 	if (data[i]=='*') {
// 		rez+=data[i-1]*data[i+1];
// 	}
// }

	
// function divine() {
// 	if (data[i]=='/') {
// 		rez+=data[i-1]/data[i+1];
// }


// function plus() {
// 	if (data[i]=='+') {
// 		rez+=data[i-1]+data[i+1];
// 	}
// }

// function minus() {
// 	if (data[i]=='-') {
// 		rez+=data[i-1]-data[i+1];
// 	}
// }	

			
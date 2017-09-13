// var t = []; // пустой массив

// var temp = [12, 14, 10]; // индексный простой
// temp[2]=9999;
// temp[20]=777;
// console.log(temp); 
// outArray();

// function outArray() {  // функция выводит массив
// 		var out='';
// 		for (var i=0; i<temp.length; i++) {
			
// 			if (temp[i]!=undefined) {
// 			out += i + '---' + temp[i] + '<br>';
// 			}

// 		}

// 		document.getElementById('out').innerHTML = out;
// }

var temp = [-1, 12, 10, -5, 0];

function outArray() {
		var out='';
		for (var i=0; i<temp.length; i++) {
			if (temp[i]<0) {
			out += i + '--->' + temp[i] + '<br>';
			}

		}

		document.getElementById('out').innerHTML = out;
}

outArray();
var mas =[]; 
mas[0]=6;
mas[1]=8;
mas.push(2017); //пихает в массив новые элементы
mas.push(2017, 777, 888); //пихает в массив новые элементы
var a = mas.pop(); // удаляет последний елемент массива предварительно записав его в память
//console.log(a);
delete mas [1]; // удаляет конкретный елемент массива
console.log(mas);

// alert('hello');
// console.log('Hi');
//
var a = document.getElementById('out'); //выхватывает весь параграф, присваеваем его в переменную // получить документ по id
console.log(a.id); // вывод объекта a со св-вом id равное out
 a.id = 'two'; // присвоение объекту a.id значение two
 console.log(a.id); //вывод two
console.log(a.innerHTML); // вывод
//

 var bo = document.getElementById('bbb'); // сожержимое body
 console.log(bo.innerHTML);
 bo.innerHTML='<h1>Hello</h1>';

//или же можно обратиться без getElementById('bbb');

// var bo = document.querySelector('body'); // сожержимое body
// console.log('bo'); // содержимое body
// console.log(bo.innerHTML); // содержимое внутри body

// bo.innerHTML='<h1>Hello bbbba</h1>';

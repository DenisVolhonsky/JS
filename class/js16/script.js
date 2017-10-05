
// console.dir(window); // показывает св-во объекта
//console.dir(window.document.documentElement); //обращение к html
// console.dir(window.document.body); обращение к body
// var a = 1000000;
// console.dir(window);


/// Нода это узел. Бывает нода елемента и текстовая нода///


//////показывае елемент и его структуру, если это массив элементов, тогда еще  и их св-во///////

// var selectorId  = document.getElementById('selectorId');
// console.log(selectorId);  
// var selectorClass  = document.getElementsByClassName('selectorClass');
// console.log(selectorClass);
// var selectorTag  = document.getElementsByTagName('div');
// console.log(selectorTag);
// var querySel = document.querySelector('#selectorId');
// console.log(querySel);
// var querySelAttr = document.querySelector('[name="value"]');
// console.log(querySelAttr);
// var querySelAll = document.querySelectorAll('.selectorClass');
// console.log(querySelAll);
// var byName = document.getElementsByName('value');
// console.log(byName); 

///////////////////////перебор коллекции елементов/////////////////////////////

// var childSelectorClass = document.getElementsByClassName('childSelectorClass');
// for (var i = 0; i<childSelectorClass.length;i++){
//     console.log(childSelectorClass[i]);
// }

/////////////////////Навигация по DOM только для чтения/////////////////
// console.log(childSelectorClass[0].parentNode);  //показать  ноду родителя
// var selectorClass = document.getElementsByClassName('selectorClass')[1];
// console.log(selectorClass.previousSibling); //показать  предшествующего брата
// console.log(selectorClass.previousElementSibling);
// var selectorClass2 = selectorClass.previousElementSibling;
// console.log(selectorClass2);
// selectorClass2.innerHTML ='ghffdghfgjghkhgg';
// console.log(selectorClass.previousElementSibling);
// console.log(selectorClass.nextSibling);
// console.log(selectorClass.nextElementSibling);

// var selectorClass2 = document.getElementsByClassName('selectorClass')[2];
// console.log(selectorClass2.parentElement); 
//console.log(selectorId.childNodes);  // хранит все дочерние елементы(ноды) включая текстовые 
//обращение производится след спос document.body.childNodes - это колекция!!!
//console.log(selectorId.children); 
 //console.log(selectorClass2.firstChild);  //доступ к первому ребенку
 //console.log(selectorClass2.firstElementChild);
// console.log(selectorId.lastChild);  //доступ к последнему элементу
// console.log(selectorId.lastElementChild);


//////////////////////// Атрибуты/////////////////

// var selectorClass = document.getElementsByClassName('selectorClass')[0];
// console.log (selectorClass.hasAttribute('dataid'));
// console.log (selectorClass.getAttribute('dataid'));
// selectorClass.setAttribute('dataidnew', 'new');
// selectorClass.removeAttribute('dataid');


///////////Добавление и удаление узлов////////////////////

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var beforeElem = selectorClass.firstElementChild;
// var div = document.createElement('div');

// console.dir(div);
// div = '<div></div>'
// console.dir(div);
// btn.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div';
//     selectorClass.insertBefore(div,beforeElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// btn.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div append';
//     // selectorClass.appendChild(div);
//     selectorClass.append(div);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var updatedElem = selectorClass.firstElementChild;
// btn.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div';
//     selectorClass.replaceChild(div,updatedElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var updatedElem = selectorClass.firstElementChild;
// btn.onclick = function(){
//     selectorClass.removeChild(updatedElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var i = 0;
// btn.onclick = function(){
//     i++;
//     var newElem = document.createElement('div');
//     newElem.innerHTML = 'This is new Element'+i;
//     selectorClass.before(newElem);
//     // selectorClass.prepend(newElem, selectorClass.firstElementChild);
// }


// var btn = document.getElementById('btn');
// var updatedElem = btn.nextElementSibling;
// var updatedElem1 = updatedElem.firstElementChild;
// btn.onclick = function(){
// 	console.log(updatedElem.children);
//    updatedElem.removeChild(updatedElem1);
//    console.log(updatedElem.children);
// }






















































































































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







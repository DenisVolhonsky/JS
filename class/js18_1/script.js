//таймеры и интервалы
var test = document.querySelector('.test');
//timer позволяет запустить действие через какое-то время

//setTimeout() один раз запускает функцию через отложенный промежуток времени
var timer;

function myAnim() {  //после выполнения функции отсчитываем 1 сек и снова запускаем функцию
    test.innerHTML+='.';
    timer = setTimeout(myAnim, 1000);
}
myAnim();

//var interva = setInterval(myAnim1, 1000);

document.querySelector('button').onclick=function () {
    clearInterval(timer);
}
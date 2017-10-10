//таймеры и интервалы
var test = document.querySelector('.test');
//timer позволяет запустить действие через какое-то время
function myAnim1() {
    test.innerHTML+='.';
}, 1000);

//var interva = setInterval(myAnim1, 1000);
// document.querySelector('button').onclick=function () {
//     clearInterval(interva);
// }
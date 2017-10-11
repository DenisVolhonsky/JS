//////Progress bar////////////////

var progress = document.querySelector('progress');
var val = document.getElementById('val');
var start=0;

var myProgress = setInterval(function(){
    var start = parseInt(progress.value);
    if(start>=100) clearInterval(progress);
    else {
        start++;
        progress.value = start; // .value это атрибут progress
        val.innerHTML = start;
    }
}, 50);

//////////Mechanic clock/////////////////
var clock1 = document.getElementById('clock1');
var deg=0;
function second() {
    clock1.style.transform= 'rotate('+ deg +'deg)';
    deg=deg+0.3;
}
setInterval(second, 50);

var clock2 = document.getElementById('clock2');
var deg1=6;
function minute() {
    clock2.style.transform= 'rotate('+ deg1 +'deg)';
    deg1=deg1+6;
}
setInterval(minute, 60000);

// 3. Вывести цифры от 1 до 60 с задержкой 1 секунда.
// Т.е. цифровой таймер.
var sec = document.getElementById('sec');
var s=0;
setInterval(function() {
    if(s>59) clearInterval(sec);
    else {
        s++;
        sec.innerHTML = 'Remains: '+ s +' sec.';
    }
}, 1000);

// 4. Сделайте цифровые часы состоящие из двух компонент: минуты и секунды.
// Под часами есть две кнопки: первая кнопка
// запускает время, вторая - останавливает.

var time = document.getElementById('time');
var s1=0, m1=0;

setInterval(function() {
    time.innerHTML = m1 +' : '+ s1;
    s1++;
    if (s1%60==0) {
        m1++;
        s1=0;
    }
}, 1000);



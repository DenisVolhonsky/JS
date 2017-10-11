// var progress = document.querySelector('progress');
// //var start=0;
//
// var myProgress = setInterval(function(){
//     var start = parseInt(progress.value);
//     if(start>=100) clearInterval(progress);
//     else {
//         start++;
//         progress.value = start;
//     }
// }, 50);

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
    deg1=deg1+0.3;
}

setInterval(minute, 60000);
var p = document.getElementById('out');

// for (var i=999; i>=0; i--) {
//    p.innerHTML += i + ' ';
// }
//
// for (var i=0; i<=999; i++) {
//     p.innerHTML += i + ' ';
// }

// for (var i=0; i<=258; i=i+2) {
//     // if (i == 8) break; // прерывание цикла до вывода макс 6
//     p.innerHTML += i + ' ';
//     if (i == 8) break; // прерывание цикла макс 8
//}

for (var i=0; i<=258; i=i+2) {
    if (i == 8)
        continue; // прерывание текущий круг цикла пропуск цифры 8
    p.innerHTML += i + ' ';

}

// document.getElementById('push').onclick = f1;
//
// function f1() {
//     var a,b,p;
//     a = document.getElementById('num1').value;
//     b = document.getElementById('num2').value;
//     p = document.getElementById('out');
//     for (var i=a; i<b; i++) {
//         p.innerHTML += '&#' +i+ ';' + ' ';
//     }
//
// }

// var p = document.getElementById('out');
// var a=1;
// for (var i=0; i<64; i++) {
//     if (a > 2048) continue;
//     p.innerHTML +=i+ ' ---> ' + a + '<br>';
//
//     a=a*2;
//
// }


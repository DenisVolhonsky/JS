
// document.getElementById('btn1').onclick= f1;
//
// function f1() {
//     var inp = document.getElementById('num1').value;
//
//     if (inp>100 || inp<=200) {
//         console.log('Входит');
//     }
//     else {
//         console.log('Нет');
//     }
// }

// var a=true*1;
// alert(a);

document.getElementById('btn1').onclick= f1;

function f1() {
    var inp = document.getElementById('num1').value;

    if (inp > 1900 && inp <= 2017) {
        console.log(2017 - inp);
    }
    else if (inp <= 17) {
        console.log(17 - inp);
    }
    else if (inp > 17 && inp < 100) {
    console.log(117 - inp);
    }
else
    {
        console.log('Вы старый пердун!');
    }
}

document.getElementById('btn2').onclick= f2;

function f2() {
    var inp = document.getElementById('num2').value;
    var inp1 = document.getElementById('num3').value;


    if (inp>inp1) {
        console.log(inp);
    }
    else if (inp<inp1){
        console.log(inp1);
    }
    else {
        console.log('Числа равны');
    }

}

document.getElementById('btn4').onclick= f3;

function f3() {
    var inp3 = document.getElementById('num4').value;

    if (inp3>=1 && inp3<=20) {
        console.log('Квартира находится в 1-м поъезде');
    }
    else if (inp3>=21 && inp3<=64) {
        console.log('Квартира находится в 2-м поъезде');
    }
    else if (inp3>=65 && inp3<=80) {
        console.log('Квартира находится в 3-м поъезде');
    }
    else  {
        console.log('В этом доме нет такой вкартиры');
    }
}

document.getElementById('btn6').onclick= f5;

function f5() {
    var inp5 = document.getElementById('num6').value;
    var inp6 = document.getElementById('num7').value;

    if ((inp5=='ivan' && inp6==333) || (inp5=='ssss' && inp6==666) || (inp5=='gibs' && inp6==0000)) {
        console.log('Добро пожаловать');
    }
    else {
        console.log('Ошибка');
    }
}

document.getElementById('btn7').onclick= f6;

function f6() {
    var inp10 = document.getElementById('num10').value;
    var inp11 = document.getElementById('num11').value;
    var inp12 = document.getElementById('num12').value;

    var a = [inp10, inp11, inp12];

    var max = a[0];
    for (var i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }

        console.log('  max:', max);
        // document.write('Array:[',a,']<br> max:',max,'<br>');
    }
}


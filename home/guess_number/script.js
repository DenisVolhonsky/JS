var randomNumber;
randomNumber = Math.floor((Math.random()*10)+1); // рандомное число
console.log('Рандомное число: ' + randomNumber);

function f1 () {
    var inputNumber;

    inputNumber = document.getElementById('inp').value; // число из поля ввода
    console.log('Введенное число: ' + inputNumber);

    if (inputNumber == randomNumber) {
        out.innerHTML = 'Вы угадали!';
    }
    else if (inputNumber > randomNumber) {
        out.innerHTML = 'Ваше число больше!';
    }
    else {
        out.innerHTML = 'Ваше число меньше!';
    }
}

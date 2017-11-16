// Циклы (вывод в строку через пробел и в столбик)
// ----------------------------------------
// 1. Вывести числа от 4 до 400 на экран.
for(var i=4; i<401; i++) {
    document.getElementById('task1').innerHTML+= i +' ';
}

// 2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
var j=4;
for(var i=0; i<4; i++) {
    document.getElementById('task2').innerHTML+= j +' ';
    j=j+3;
}

// 3. Вывести числа 654 653 652 до нуля.
for(var i=654; i>=0; i--) {
    document.getElementById('task3').innerHTML+= i +' ';
}

// 4. Вывести все годы с 1983 до 2017.
for(var i=1983; i<=2017; i++) {
    document.getElementById('task4').innerHTML+= i +' ';
}

// 6. Вывести числа -4 -2 0 2 4 6 ...100.
for(var i=-4; i<=100; i++) {
    if(i%2==0)
    document.getElementById('task6').innerHTML+= i +' ';
}

//     Массивы
// ---------------------------------------
// Весь вывод в консоль!
// 1. Массив [3, 6, 1, 13, 88, 43]. Вывести нулевой, третий элемент.
var mas1=[3, 6, 1, 13, 88, 43];
console.log('Task1: '+ mas1[0], mas1[3]);
//
// 2. Массив ['Hi', "hello", 34, "prima"]. Вывести первый, последний элемент.
var mas2=['Hi', "hello", 34, "prima"];
console.log('Task2: '+ mas2[0], mas2[mas2.length-1]);
//
// 3. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Вывести длину массива.
var mas3=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log('Task3: '+ mas3.length);
//
// 4. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Замените 3 элемент массива на строку 'new element'.
var mas4=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
mas4[3]='new element';
console.log('Task4: '+ mas4);
//
// 5. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Замените 2 и 4 элемент массива на числа 22 и 44.
var mas5=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
mas5[2]=22;
mas5[4]=44;
console.log('Task5: ' +mas5);

// 6. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Создайте 10 член массива со значением 100.
var mas6=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
mas6[10]=100;
console.log('Task6: '+mas6);

// 7. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Создайте 12 член массива со значением 200. Выведите массив. Выведите 11 член массива.
var mas7=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
mas6[12]=200;
console.log('Task7: ' +mas6);
console.log(mas6[11]);
//
// 8. Дан массив var arr = [31, 24, 35, 47, 12].
// Выведите arr[3], arr[60].
var arr = [31, 24, 35, 47, 12];
console.log('Task8: ' +arr[3], arr[60]);
//

// 9. Дан массив var arr = [31, 24, 35, 47, 12].
// Выведите arr[f], где переменная f = 1, f=4, f=7
var arr = [31, 24, 35, 47, 12];
var f=1;
console.log('Task9: ' +arr[f]);
f=4;
console.log(arr[f]);
f=7;
console.log(arr[f]);

//
// 10. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Выведите arr[i], где переменная i = 1,2,3,4,5.
var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log('Task10: ');
for (var i=1; i<6; i++) {
    console.log(arr[i]);
}
//
// 11. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Выведите arr[i], где переменная i - вводит пользователь.


document.getElementById('rez11').onclick = f11;
function f11() {
    var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    var i = document.getElementById('inp11').value;
    document.getElementById('out11').innerHTML = arr[i];
}
//
// 12. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Выведите массив на страницу через пробел.
var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for(var i=0; i<arr.length; i++) {
    document.getElementById('out12').innerHTML += ' '+ arr[i];
}

// 13. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Выведите массив в обратном порядке на страницу через пробел.
//
var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for(var i=arr.length-1; i>=0; i--) {
    document.getElementById('out13').innerHTML += ' '+ arr[i];
}

//     Вложенные массивы
// -------------------
//
//     14. Массив:
//     arr = [2, 3, [4,5]]
// Выведите весь массив в консоль. Выведите 0, 1 члены массива.
// Выведите второй элемент массива.
var arr = [2, 3, [4,5]];
console.log('Task14: ' +arr[0],arr[1]);
// 15. Массив:
//     arr = [2, 3, [4,5]]
// Выведите в консоль элемент arr[2][0]
// Выведите в консоль элемент arr[2][1]
console.log('Task15: '+arr[2][0], arr[2][1]);

// 16. Массив:
//     arr = [2, 3, [4,5]]
// вторым элементом данного массива является тоже массив [4,5]
// Выведите в консоль длину массива [4,5], для этого запишите правильно:
// console.log(arr[сюда впишите номер элемента-массива].lenght);
console.log('Task16: '+arr[2].length);
//
// 17. Дан массив
// arr = [ 2, [3,4,5], [6,7,8]  ];
// выведите в консоль число 4, число 8 из этого массива.
var arr = [ 2, [3,4,5], [6,7,8] ];
console.log('Task17: '+arr[1][1],arr[2][2]);
//
// 18. Дан массив
// arr = [ 2, [3,4,5], [6,7,8]  ];
// выведите в консоль второй элемент данного массива
// выведите нулевой элемент этого массива
var arr = [ 2, [3,4,5], [6,7,8]];
console.log('Task18: '+ arr[2]);
console.log(arr[0]);
//
// 19. Дан массив
// arr = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
// выведите в консоль все элемент последнего вложенного в него массива
var arr = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
console.log('Task19: ' +arr[2]);
//
// 20. Дан массив
// arr = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
// выведите в консоль foo и beta из этого массива.
var arr = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
console.log('Task20: '+arr[0][2],arr[1][0]);


//Closure -> замыкание
// Scopes -> области видимости
// так функция не может конфликтовать как глобальная переменная

function f1(x) {
    return function(y) {
            return x+y; // x+2
    }
}
console.log (f1(1)(2));


// Счетчик вариант 1
var counter = (function() {
    var count=1;
    return function(){
        return count++;
    }
}()); // анонимная сомовызыв функция

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// Счетчик вариант 2
function add() {
    count=1;
    return function(){
        console.log(count++);
// первый раз внутр функция не видит count и идет по цепочке области видимости выше где count=1
// выводит 1 и хранит уже 2
// при след вызове add() count=2 и хранит 3, эта переменная уже видна внутри анонимной функции
// и не обращается по цепочке выше
    }
}

var out=add();
out();
out();
out();
out();


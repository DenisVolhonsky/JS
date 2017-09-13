var goods = {
    'name': 'Samsung',
    'cost': 500,
    'img': 'https://cdn2.iconfinder.com/data/icons/facebook-svg-icons-1/64/mobileicon-128.png',
    'hello mama': 5555
};
// console.log(goods.name);
// console.log(goods['hello mama']);
// var a = 'cost';
// console.log(goods[a]);
//console.log(goods);


///////////////////////////////
var div = document.getElementById('out');
var out = '';
for (var key in goods) {
    //out+= key + ' ';   // вывод ключей
    out += goods[key] + ' ';    // вывод значений
}
div.innerHTML = out;
// div.innerHTML +='<img src="'+goods.img+'">'; //вывод картинки с разрывом строк - старый вариант
div.innerHTML += `<img src="${goods.img}">`; // ES6 новый стандарт, но поддерживается не всеми браузерами

var mas2 = {
    "name": "Alex",
    "age" : 23
};

var out="";

for (var key in mas2) {
    out +=key+' --- '+mas2[key]+'<br>';
}
document.write(out);
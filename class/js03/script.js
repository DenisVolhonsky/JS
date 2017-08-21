// function mM() {
//     var i = document.getElementById('two');
//     alert (i.value);
//     i.value = 77;
// }
// document.getElementById('f4').onclick = mM;
document.getElementById('change').onclick = dollars;
function dollars() {
  var ye, p;
  p = document.getElementById('sum_grn').value;
  ye = p/26;
  var rez = document.getElementById('out');
  rez.innerHTML = ye;
}

document.getElementById('push').onclick = calc_smesi;
function calc_smesi() {
    var w,l,h,rez, meshki;
    w = document.getElementById('w').value;
    l = document.getElementById('l').value;
    h = document.getElementById('h').value;
    rez = w*l*h*12;
    meshki = rez/50;
    var i = document.getElementById('rashod');
    i.innerHTML = rez + ' кг';
    var k = document.getElementById('meshki');
    k.innerHTML = Math.round(meshki) + ' мешков';
}

// document.getElementById('perevod').onclick = perevod;
// function perevod() {
//     var
//     w = document.getElementById('w').value;
//     rez = w*l*h*12;
//     meshki = rez/50;
//     var i = document.getElementById('rashod');
//     i.innerHTML = rez + ' кг';
//     var k = document.getElementById('meshki');
//     k.innerHTML = Math.round(meshki) + ' мешков';
// }

document.getElementById('push_gbo').onclick = rashet;

function rashet() {
    var benzin=26, gaz=12, gbo_cost=15000;
    var probeg, rashod1, sum_benz, sum_gaz, term;

    rashod1 = document.getElementById('rashod1').value;
    probeg = document.getElementById('probeg').value;

    rashod1 = rashod1/100;
    sum_benz = (probeg*rashod1)*benzin;
    sum_gaz = probeg*(rashod1*1.2)*gaz;
    term = gbo_cost/(sum_benz-sum_gaz);

    var c = document.getElementById('out2');
    c.innerHTML = 'Окупаемость составляет '+ Math.round(term) +' мес.';
}
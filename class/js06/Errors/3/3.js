
document.getElementById('say-hello').onclick = fSayHello;



function fSayHello() {
    var inp = document.getElementById('user-name').value;
    alert('Hello'+ inp);
}
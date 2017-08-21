function f1() {
 var c = document.getElementById('out');
 var d=1;
    for (var i=1; i<=10; i++) {
        for (var j = 1; j <= 10; j++) {
            c.innerHTML +='<span>' +d +' </span>';
            d++;
        }
        c.innerHTML += '<br> ';
    }
}
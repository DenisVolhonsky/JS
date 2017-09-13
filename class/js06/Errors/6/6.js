document.getElementById('create-num').onclick = f1;

function f1() {
    var p = document.getElementById('out');
        for(var k=0; k<200; k++) {
            p.innerHTML += k +'';
        }
}
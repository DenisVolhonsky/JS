document.getElementById('create-block').onclick = createBlock;
function createBlock() {
    var st = '<div class="block"></div>';
    for (var i=0; i<50; i++) {
        document.getElementById('out').innerHTML +=st;

    }
}

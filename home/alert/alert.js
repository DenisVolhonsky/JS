function f1() {

   for(var i=0; i<30; i++) {
       alert ('Я же русским языком просил не нажимать!!!')
       alert ('Что за люди такие?')
   }
}

function f2() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '1.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    // document.getElementsByTagName('button').style.color = 'red';

}

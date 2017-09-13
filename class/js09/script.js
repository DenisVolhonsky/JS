var hero = {
	"name": '', //имя
	"hit": '',  //сила удара в массиве
	"xp": '',   // жизни
	"udar": function(a) {   //анонимная функция определяет
		var b;
		if (a==0) b=0;
		else if (a==1 || a==2) b=this.hit[0];  // а - кости от 1 до 5
		else if (a==3 || a==4) b=this.hit[1];
		else if (a==5) b=this.hit[2];
		return b;  //возвращает силу удара, т.е. элемент в массиве 0,1,2 - hero1.hit = [2,3,9];
	}
}
////////////создаем ассоц массив hero1 такой же как и hero/////////////
var hero1 = {}; //объект или массив наследующий ключи и знач  hero
for(var key in hero) {
	hero1[key]=hero[key];  
}
hero1.name = 'Колобок';
hero1.hit = [2,3,9];
hero1.xp = 10;
////////////////////////////////////////////////////////

////////////создаем ассоц массив hero1 такой же как и hero/////////////
var hero2 = {}; //объект или массив наследующий ключи и знач  hero
for(var key in hero) {
	hero2[key]=hero[key];
}
hero2.name = 'Лиса';
hero2.hit = [1,4,5];
hero2.xp = 10;
////////////////////////////////////////////////////////


document.getElementById('udar').onclick = h1Udar; //по нажатию кнопки бьет колобок
var kick = document.getElementById('kick');
i=1;
function h1Udar() {    //функция удар колобка
	var u = hero1.udar(cubik());
  hero2.xp = hero2.xp - u;
  console.log(hero1.name+' ударил '+hero2.name+' на '+u);
  console.log('У Лисы осталось: '+hero2.xp+' жизней'); 

  
  kick.innerHTML += '<br>Раунд:'+ i++;
  kick.innerHTML += '<br>'+ hero1.name+' ударил '+hero2.name+' на '+u;
  kick.innerHTML += '<br> У Лисы осталось: '+hero2.xp+' жизней';

  h2Udar();
  if(hero2.xp <= 0) {
  	alert ('Колобок win');
  	location.reload(); //перезагрузить страницу
  }

}

function h2Udar() {        //функция удар лисы
	var u=hero2.udar(cubik());
  hero1.xp = hero1.xp - u;
  console.log(hero2.name+' ударил '+hero1.name+' на '+u);

  kick.innerHTML += '<br>'+ hero2.name+' ударил '+hero1.name+' на '+u;

  if(hero1.xp <= 0) {
  	alert ('Лисица win');
  	location.reload(); //перезагрузить страницу
  }

  console.log('У Колобка осталось: '+hero1.xp+' жизней'); 
  console.log(' ');
  kick.innerHTML += '<br> У Колобка осталось: '+hero1.xp+' жизней <br>';
}
  
 

function cubik() {                          // рандомом кидается кубик
	var rand = -0.5 + 6*Math.random();
    rand = Math.round(rand);
    return Math.abs(rand);
}
//console.log(cubik());



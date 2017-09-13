var city = {
  "c1" : {
      "id": 707860,
      "name": "Hurzuf",
      "country": "UA",
      "full country": "Гурзуф",
      'img': 'ua.png'
  },
  "c2" :{
    "id": 519188,
    "name": "Novinki",
    "country": "RU",
      "full country": "Новинки",
      'img': 'ru.png'
  },
  "c46" : {
    "id": 1283378,
    "name": "Gorkhā",
    "country": "NP",
      "full country": "Горька",
      'img': 'np.png'
  }};

var div = document.getElementById('out');
var out = '';

for(var key in city) {
    out += `<p>${city[key].name}</p>`
    out += `<p>${city[key].country}</p>`
    out += `<p>${city[key]['full country']}</p>`
    out += `<img src="images/${city[key].img}" alt="1">`
}
div.innerHTML = out;

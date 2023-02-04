images = [
  {"name":"Uta", "src":"img/SR1UTA.jpg"},
  {"name":"Hiyori", "src":"img/SR2HIYORI.jpg"},
  {"name":"Nico Robin", "src":"img/SR3ROBIN.jpg"},
  {"name":"Nami", "src":"img/SR4NAMI.jpg"},
  {"name":"Boa Hancock", "src":"img/SR5HANCOCK.jpg"},
  {"name":"Perona", "src":"img/SR6PERONA.jpg"},
  {"name":"Reiju", "src":"img/SR7REIJU.jpg"},
  {"name": "Shirahoshi", "src":"img/SR8SHIRAHOSHI.jpg"},
  {"name": "Vivi", "src":"img/SR9VIVI.jpg"},
  {"name": "Ulti", "src":"img/NML1ULTI.png"},
  {"name":"Hina", "src":"img/NML2HINA.jpg"},
  {"name": "Stussy", "src":"img/NML3STUSSY.jpg"},
  {"name":"Black Maria", "src":"img/NML4BLACKMARIA.jpg"},
  {"name": "Big Mom", "src":"img/UK1BM.jpg"},
  {"name":"Ivankov", "src":"img/UK2IVANKOV.jpg"},
  {"name": "Shinobu", "src":"img/UK3SHINOBU.jpg"},
  {"name": "Lola", "src":"img/UK4LOLA.jpg"},
  {"name":"Alvida", "src":"img/UK5ALVIDA.jpg"},
  {"name": "Mermail Kokoro", "src":"img/UK6KOKORO.jpg"},
  {"name":"'Authentic' Nami", "src":"img/UK7FAKENAMI.jpg"},
  {"name":"'Authentic Robin'", "src":"img/UK8FAKEROBIN.jpg"},
  {"name": "Elder Nyon", "src":"img/U9ELDER.jpg"},
  {"name": "Lovely Black Beard", "src":"img/SSRBB.jpg"},
];
//Special=5,6,11,12,16,17,19,20,22,23

let imgIndex = 0;
let currName = "";
let sourceIMG = "";
let startCount = 0;

function changeImg(){
  document.getElementById("slideshow").src = images[imgIndex].src;
  currName = images[imgIndex].name;
  sourceIMG = images[imgIndex].src;
  if(images.length > imgIndex+1){
    imgIndex++;
  } else {
    imgIndex = 0;
  }
}

function startCycle() {

  let timey = Math.random() * 140 + 2000;

  return new Promise(function(resolve, reject) { 
         let s = setInterval(changeImg, 50);
         setTimeout(()=>{clearInterval(s); resolve;}, timey); 
         setTimeout(resolve, timey);

        }).then(function() { 
           if (sourceIMG.charAt(4) == 'S' && sourceIMG.charAt(5) != 'S') {
  document.getElementById("Description").innerHTML = "A lovely " + currName + " appeared before you, ready for an amazing adventure.";
} else if (sourceIMG.charAt(4) == 'U'){
document.getElementById("Description").innerHTML = "Congratulations !!!! Your waifu is the wildest " + currName; 
} else if (sourceIMG.charAt(4) == 'N'){
  document.getElementById("Description").innerHTML = currName + " comes by you, and hopefully, you will have a 'safe' experience....";
} else if (sourceIMG.charAt(4) == 'S' && sourceIMG.charAt(5) == 'S'){
  document.getElementById("Description").innerHTML = "Good luck bro.....";
}

document.getElementById("startGacha").innerHTML = "TRY AGAIN";
        }); 
}
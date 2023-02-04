images = [
  {"name":"Sheep SMILE", "src":"img/SheepSMILE.jpg"},
  {"name":"Monkey SMILE", "src":"img/20230106025948.jpg"},
  {"name":"Elephant SMILE", "src":"img/20230106030017.jpg"},
  {"name":"Bat SMILE", "src":"img/20230106030013.jpg"},
  {"name":"Bull SMILE", "src":"img/20230106030039.jpg"},
  {"name":"Dark-Dark Fruit", "src":"img/20230106124707.jpg"},
  {"name":"Flame-Flame Fruit", "src":"img/20230106124703.jpg"},
  {"name": "Lion SMILE", "src":"img/20230106030048.jpg"},
  {"name": "Snake SMILE", "src":"img/20230106025939.jpg"},
  {"name": "Peacock SMILE", "src":"img/20230106025909.jpg"},
  {"name": "Bear SMILE", "src":"img/20230106025934.jpg"},
  {"name":"Smoke-Smoke Fruit", "src":"img/20230106125154.jpg"},
  {"name":"String-String Fruit", "src":"img/20230106125157.jpg"},
  {"name": "Tiger SMILE", "src":"img/20230106030044.jpg"},
  {"name": "Alpaca SMILE", "src":"img/20230106030008.jpg"},
  {"name": "Horse SMILE", "src":"img/20230106030022.jpg"},
  {"name":"Fish-Fish Fruit, Model: Dragon", "src":"img/20230106124819.jpg"},
  {"name":"Ope-Ope Fruit", "src":"img/20230106124945.jpg"},
  {"name": "Scorpion SMILE", "src":"img/20230106025957.jpg"},
  {"name":"Magnet-Magnet Fruit", "src":"img/20230106125129.jpg"},
  {"name":"Flower-Flower Fruit", "src":"img/20230106125149.jpg"},
  {"name": "Eagle SMILE", "src":"img/20230106030032.jpg"},
  {"name":"Bird-Bird Fruit, Model: Phoenix", "src":"img/20230106030126.jpg"},
  {"name":"Snake-Snake Fruit, Model: Yamata no Orochi", "src":"img/20230106030232.jpg"},
];
//Special=5,6,11,12,16,17,19,20,22,23

imgIndex = 0;
let currName = "";
let DFCount = 0;

function changeImg(){
  document.getElementById("slideshow").src = images[imgIndex].src;
  currName = images[imgIndex].name;
  if(images.length > imgIndex+1){
    imgIndex++;
  } else {
    imgIndex = 0;
  }
}

function startCycle() {

  let timey = Math.random() * 100 + 2000;

  return new Promise(function(resolve, reject) { 
         let s = setInterval(changeImg, 50);
         setTimeout(()=>{clearInterval(s); resolve;}, timey); 
         setTimeout(resolve, timey);

        }).then(function() { 
           if (currName.includes("SMILE")) {
  document.getElementById("Description").innerHTML = "Unfortunately, it's just a " + currName + "...";
} else if (currName.includes("Fruit")){
DFCount++;
document.getElementById("Description").innerHTML = "From the index, you can tell it's a " + currName + " ! This crazy power will lead you to the new era !";
}

document.getElementById("startGacha").innerHTML = "TRY AGAIN";
        }); 
}
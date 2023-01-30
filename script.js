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
  {"name":"1000 KIM CƯƠNG", "src":"img/20230108003242.jpg"}
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

  return new Promise(function(resolve, reject) { 
         let s = setInterval(changeImg, 50);
           setTimeout(()=>{clearInterval(s); resolve;}, 2000); 

setTimeout(resolve,2000);

        }).then(function() { 
           if (currName.includes("SMILE")) {
  document.getElementById("Description").innerHTML = "Quay ra được mỗi quả SMILE thui. Xin lỗi nha, chúc bạn may mắn lần sau";
} else if (currName.includes("Fruit")){
DFCount++;
document.getElementById("Description").innerHTML = "Quay ra Trái Ác Quỷ xịn rồi ! Quay đủ 5 Trái Ác Quỷ để đổi quà nhé !\nHiện đã có " + DFCount + " trái.";
} else {
document.getElementById("Description").innerHTML = "VÃI CẢ LỜ CHÚC MỪNG BẠN ĐÃ TRÚNG ACC 1000 KIM CƯƠNG !!!!"
}
        }); 
}
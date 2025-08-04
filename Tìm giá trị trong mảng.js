let animeDoraemon = [
  "Doraemon",
  "Nobita",
  "Dekisugi",
  "Shizuka",
  "Jaian",
  "Suneo",
  "Dorami"
];
let animeGuess = prompt (" nhập tên nhân vật anime bạn thích");
let choice = false
for (let i = 0; i < animeDoraemon.length; i++){
if ( animeDoraemon[i]=== animeGuess){
choice = true;
}
}
if ( choice ){
    alert(' binggooo!!! bạn đã đoán nhân vật trong doraemon đúng ko!!!')
}else{
    alert(" bạn đoán sai nhân vật theo đề do tớ chọn rồi á!!")
}
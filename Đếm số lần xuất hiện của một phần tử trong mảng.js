let number = [];
let length = Math.floor(Math.random()*10)+10;
for( let i = 0; i < length; i++){
    let randomNumber = Math.floor(Math.random()*10)+1;
    number.push(randomNumber);
}
let k = +prompt("nhập số bạn muốn kiểm tra");

let ktra = 0
for ( let j = 0; j < number.length; j++){
    if( number[j]===k)
        ktra ++;
}
alert (number);
alert (" số lần số bạn nhập xuất hiện là: "+ ktra);
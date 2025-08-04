let number = [];
let length = Math.floor(Math.random() * 10) + 10;
for (let i = 0; i < length; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  number.push(randomNumber);
}
let tongChan = 0;
let tongLe = 0;
for (let j = 0; j < length; j++) {
  if (number[j] % 2 === 0) {
    tongChan = tongChan + number[j];
  } else {
    tongLe = tongLe + number[j];
  }
}
alert(" tổng chẵn là: " + tongChan);
alert(" tổng lẻ là: " + tongLe);
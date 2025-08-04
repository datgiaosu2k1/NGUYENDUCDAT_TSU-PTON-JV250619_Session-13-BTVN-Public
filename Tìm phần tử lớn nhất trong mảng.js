let input = prompt ('nhập các số bạn muốn, và tớ sẽ tìm ra số lớn nhất');
let arr = input.split("");
let max = arr[0];
for( let i = 0; i < arr.length ; i ++){
if ( max < arr[i]){
    max = arr[i]
}

}
alert('con số lớn nhất mà bạn nhập vào là: '+ max)

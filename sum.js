const numbers = [44, 23, 34, 516, 19, 25];

function arraySum(numbers){
   let sum = 0;
for(i=0; i<numbers.length; i++){
    var element = numbers[i]
     sum = sum + element;   
}
    return sum;
}
var totalArray = arraySum(numbers);
console.log(totalArray);
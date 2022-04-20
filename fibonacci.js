/* const fibo = [0,1];
for(i=2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];

}
console.log(fibo); */

function fibonacci (number){
    const fibo = [0, 1];
    for (i=2; i<=number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var fiboseries = fibonacci(fibo);
console.log(fiboseries);
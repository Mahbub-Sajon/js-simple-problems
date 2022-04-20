function largestNumber (numbers){
    let largest = 0;
    for(i=0; i<numbers.length; i++){
        var element = numbers[i];
       if(element>largest){
           largest = element;
       }

       
    }
    return largest;
}
const ages = [12, 4, 44, 90, 78, 15, 7, 14, 35];
const oldest = largestNumber(ages);
console.log(oldest);

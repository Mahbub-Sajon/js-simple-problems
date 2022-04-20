const business = 550;
const minister = 450;
const army = 600;

// if(business>minister){
//     console.log("Business man is bigger");
// }
// else{
//     console.log("Minister er pola bigger");
// }
// if (business>minister && business>army){
//     console.log("business man is bigger");
// }
// else if(minister>business && minister>army){
//     console.log("minister is bigger");
// }
// else {
//     console.log("army is bigger");
// }


// var max = Math.max(business, minister, army);
// console.log(max);

// function findLargest(first, second,){
//     if(first>second){
//         return first;
//     }
//     else{
//         return second;
//     }
// }
// var largestValue = findLargest(220, 450);
// console.log("The largest number is ", largestValue);

// function findLargest(first, second, third){
//     if(first>second && first>second){
//         return first;
//     }
//     else if(second>first && second>third){
//         return second;
//     }
//     else{
//         return third;
//     }
// }
// var largestValue = findLargest(220, 450, 720);
// console.log("The largest number is ", largestValue);

function findLargest(first, second, third){
    if(first>second && third>second){
        return second;
    }
    else if(first<second && first<third){
        return first;
    }
    else{
        return third;
    }
}
var smallestValue = findLargest(220, 450, 720);
console.log("The smallest number is ", smallestValue);
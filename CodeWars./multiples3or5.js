/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

function solution(number) {
    var myArray = [];
    var sum = 0;

    // condition if the number is negative
    if (number < 0) {
        return 0;
    }
    //this function adds multiples of 3 in the list
    for (var i = 3; i < number; i += 3) {
        myArray.push(i);
    }

    //this function adds multiples of 5 in the list
    for (var i = 5; i < number; i += 5) {
        myArray.push(i);
    }

    finalArray = myArray.filter((item, index) => myArray.indexOf(item) === index); // will filter and remove the duplicate values 

    for (var i = 0; i < finalArray.length; i += 1) {
        sum += finalArray[i];
    }

    return "Total sum: " + sum;
}

console.log(solution(10));
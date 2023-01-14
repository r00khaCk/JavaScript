/**Instruction:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
**/

````js
var myArray = [1,2,3,4,5];

function invert(array){
    var invertArray = [];
    for (var i=0; i < array.length; i++){ // this loop will go through each value in the array based on the length of the array given
        
        if (Math.sign(array[i]) == 1){ // Math.sign() is used to determine whether the value is negative (== -1) or positive (== 1).
            invertArray.push(-Math.abs(array[i])); //Math.abs is used to convert a value to the absolute value. -Math.abs() converts value to negative and Math.abs converts value to positive.
        }
        else if (Math.sign(array[i]) == -1){
            invertArray.push(Math.abs(array[i]));
        }
        
    }
    return invertArray;
}
console.log(invert([]));

````

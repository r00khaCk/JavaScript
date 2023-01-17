/**
 []                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

function likes(names) {
    "use strict";
    var userArr = names;

    if (userArr.length == 0){
        return "No one likes this"
    }
    else if (userArr.length < 4){
        switch(userArr.length){
            case 1:
                var message = userArr[0];
                return message + " likes this";
                break;     
            case 2:
                var message = userArr[0] + " and " + userArr[1];
                return message + " like this";
                break;
            case 3:
                var message = userArr[0] + ", " + userArr[1] + " and " + userArr[2];
                return message + " like this";
                break;    
        }
    }
    else if (userArr.length >= 4){
            var message = userArr[0] + ", " + userArr[1] + " and ";
            return message + (userArr.length-2) + " others like this";
    }
  }

console.log(likes([]));
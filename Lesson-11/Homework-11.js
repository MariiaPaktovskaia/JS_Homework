/*Задание 1*/
var arr = [-1, 0, 2, 34, -2];
var filterNumbersArr = arr.filter(function(number) {
  return number > 0;
} );

alert(filterNumbersArr)

/*Задание 2*/
var arr = [-1, 0, 2, 34, -2]
var findItem = arr.find(function(number) {
  return number > 0;
});

alert(findItem)

/*Задание 3*/
function isPalindrome(string){
    string = string.toLowerCase()
    var result = '';
        for(var i = string.length - 1; i >= 0; i--) {
            result += string[i];
        }
    if(string == result){
        return true}
    return false
}
isPalindrome('довОд')

/*Задание 4*/
function areAnagrams(word1, word2){
    if ( word1.toLowerCase().split('').sort().join() == word2.toLowerCase().split('').sort().join() ) {
        return true
    }
    return false
}
areAnagrams('довОд', 'вдоод') 

/*Задание 5*/
function divideArr(arr, size){
    var tempArr = [];

        for (var i = 0; i < arr.length; i += size) {
            var formattedArr = arr.slice(i, i+size);
                tempArr.push(formattedArr);
        }
    return tempArr;
}
  divideArr([1,2,3,4,5,6,7,8], 3)
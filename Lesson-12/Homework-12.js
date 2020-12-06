/*Задание 1*/
var array = ['Вася', 'Николай', 'Петя', 'Татьяна', 'Маша'];

var objectFromArray = array.map (function(item) {
    var newObject = {};
    newObject.name = item;
    return newObject;
})
console.log(objectFromArray)

/*Задание 2*/
var array = ['00', '13', '24'];

var TimeString  = array.reduce (function(item, current) {
return item + ' : ' + current;
}, 
'Текущее время' );
console.log(TimeString)

/*Задание 3*/
var string = 'Написать функцию, которая будет возвращать количество гласных в переданном тексте';
var chars = ['у','е','ё','ы','а','о','э','я','и','ю'];
var array = string.toLowerCase().split('');
var counter = 0;
for (var i = 0; i < array.length; i++) {
    for(var j = 0; j < chars.length; j++) {
        if (array[i] == chars[j]) {
            counter++;
        }
    }
}
console.log(counter)

/*Задание 4*/
var countSentencesLetters = function(text) {
    var result = text.split(/[.!?]/);
    var array=[];

        for (var i = 0; i < result.length; i++){
            if(result[i] != '') {
                var textWithoutSpace = result[i].split(' ').join('').split(',').join('');
                var count = ': Letters quantity is: ' + textWithoutSpace.length;
                array.push(result[i] + count)
                console.log(result[i] + count)
            }
        }
        
    return array
};
    
var message = 'Привет, студент! Студент... Как дела, студент?';
countSentencesLetters(message);
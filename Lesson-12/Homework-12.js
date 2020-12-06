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


/*Задание 5*/
var repeats = function(text) {
    var result = text.toLowerCase().split(/[.!?,' ']/)
    var array=[];

        for (var i=0; i<result.length; i++) {
            if(result[i]!='') {
                var count = 1;
                    for (var j=i+1; j<result.length; j++) {
                        if(result[i] == result[j]) {
                            count++;
                            array.push(result[j] +' : ' + count)
                        }
                    }
            }
        }

        for (i=0; i<array.length-1;i++) {
            var max = array[i].substr(array[i].length-1)
                for (j=1; j<array.length-1;j++)
                    if(max < array[j].substr(array[j].length-1)){
                        max = array[j].substr(array[j].length-1)
                        var place = array.indexOf(array[j])
                    }
        }
    
    var Result ='Максимальное число повторений у слова'+ '\"' + array[place].substr(0,array[place].length-4) + '\"' + ' - ' + max
    return Result
    };
    
    var message = 'Написать функцию, которая будет принимать текст в качестве параметра в функцию. У текст должны быть пробелы, точки, запятые, восклицательные и вопросительные знаки. Текст необходимо разбить на предложения по точки';
    repeats(message);
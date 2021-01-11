/*Задание 1:*/
/^[a-zA-Z]{3,10}_[a-zA-Z]{3,10}(-[0-9]{4})?@([a-zA-Z0-9](\.|\-)?){2,20}\.com$/.test('name_surname-1234@gmail.com');

/*Задание 2:*/
var firstNumber = '+375-25-777-77-77';
var secondNumber = '375299999999';
var thirdNumber = '8-044-444-44-44';
var forthNumber = '8033-6666666';    
function matchTest (number) {
    return /^(\+?375|8-?0)-?(17|25|29|33|44)-?[1-9][\d]{2}-?[\d]{2}-?[\d]{2}$/.test(number);
};

matchTest(firstNumber);
matchTest(secondNumber);
matchTest(thirdNumber);
matchTest(forthNumber)

/* Задание 3:*/
var string = 'Переписать решение задачи с поиском гласных';
var chars = string.match(/[аеёиоуыэюя]/igm);
chars ? console.log(chars.length) : console.log ('Нет гласных')
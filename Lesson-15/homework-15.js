var field = document.querySelectorAll('input');
var createButton = document.querySelector('button');

field[0].addEventListener("keyup", checkInput);
field[1].addEventListener("keyup", checkInput);
function checkInput() {
        if (field[0].value !=="" && field[1].value !=="") {
            createButton.disabled = false;
        }
        else createButton.disabled = true;
};
if (createButton.disabled = true) {
    createButton.addEventListener("click", checkNumbers);
    function checkNumbers () {
    if ( (1 <= +field[0].value && +field[0].value <= 10) && (1 <= +field[1].value && +field[1].value <= 10) ) {
        alert("OK!");
    }
    else {
        alert('Ошибка! Введите число от 1 до 10!');
    };
    };

}
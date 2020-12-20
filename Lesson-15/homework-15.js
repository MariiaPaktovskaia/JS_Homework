var field = document.querySelectorAll('input');
var createButton = document.querySelector('button');
var ourDiv = document.getElementById('properties');
var table = document.createElement('table');
var row = document.createElement('tr');
var column = document.createElement('td');

field[0].addEventListener('keyup', checkInput);
field[1].addEventListener('keyup', checkInput);
function checkInput() {
        if ( (field[0].value).trim() != '' && (field[1].value).trim() != '' ) {
            createButton.disabled = false;            
        }
        else createButton.disabled = true;
};

if (createButton.disabled = true) {
    createButton.addEventListener('click', checkNumbers);
    function checkNumbers () {
        if ( (1 <= field[0].value && field[0].value <= 10) && (1 <= field[1].value && field[1].value <= 10) ) {
            table.remove();
            createBoard();
            field[0].value='';
            field[1].value='';
            createButton.disabled = true;
                   
            function createBoard () {
                table = document.createElement('table');
                ourDiv.appendChild(table);
                table.classList.add('chess');
                    for (var i=0; i<field[1].value;i++) {
                        row = document.createElement('tr');
                            for (var j=0;j<field[0].value;j++) {
                                column = document.createElement('td');
                                row.appendChild(column);
                            }; 
                        table.appendChild(row);    
                    };
            };
            table.addEventListener('click', function(event) {
                var target = event.target;
                if (target.tagName != 'TD') return; 
                table.classList.toggle('change');
            });
        }
        else {
            alert('Ошибка! Введите число от 1 до 10!');
            field[0].value='';
            field[1].value='';

        };
    };
};
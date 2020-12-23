var main = document.getElementById('main');
var button = document.getElementsByClassName('button')[0];
var errorMessage;
var userCard;


button.addEventListener('click', sendXHR);
    function sendXHR () {
        if(errorMessage) {
            errorMessage.remove();
        };
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send();
        xhr.onerror = function() {
            if(errorMessage) errorMessage.remove();
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            main.insertAdjacentElement('afterend',errorMessage);
            errorMessage.innerText = 'Данные не получены, произошла ошибка запроса. Попробуйте снова.'
        };
        xhr.onload = function() {
	    var statusType = +String(this.status)[0];
    	if (statusType === 2) {
            var result = JSON.parse(this.response).data;
            if (userCard) userCard.remove();
            userCard = document.createElement('div');
            main.insertAdjacentElement('afterend',userCard);
            userCard.id = 'userCard';
                for (var i = 0; i < result.length; i++) {
                    var tab = document.createElement('div');
                    tab.classList.add('tab_' + i);
                        if (tab.classList.contains('tab_0')) { 
                            tab.classList.add('checked') 
                        };
                    tab.classList.add('tab');
                    tab.innerText = 'User ' + (i+1);
                    userCard.appendChild(tab);                      
                }
                for (i = 0; i < result.length; i++) {
                    var userField = document.createElement('div');
                    userField.classList.add('tabContent'); 
                    userField.classList.add('tab_' + i);
                        if (userField.classList.contains('tab_0')) { 
                            userField.classList.add('checked') 
                        };
                        userCard.insertAdjacentElement('beforeend',userField);
                    var userPhoto = document.createElement('img');
                    userPhoto.src = result[i].avatar;
                    userField.appendChild(userPhoto);
                    var firstName = document.createElement('p');
                    firstName.innerText = 'First name: ' + result[i].first_name;
                    userField.appendChild(firstName);
                    firstName.classList.add('aboutUser');
                    var lastName = document.createElement('p');
                    lastName.innerText = 'Last name: ' + result[i].last_name;
                    userField.appendChild(lastName);
                    lastName.classList.add('aboutUser');
                }
                userCard.addEventListener ('click', function (event) {
                var target = event.target;
                if (target != tab && target.classList.contains('checked')) return;
                    for (var i = 0; i < userCard.childNodes.length; i++) {
                        userCard.childNodes[i].classList.remove('checked');
                    };
                target.classList.add('checked');
                    for (var i = 0; i < result.length; i++) {
                        if (userCard.childNodes[i].classList.contains('checked')) {
                        userCard.childNodes[i+result.length].classList.add('checked')
                        }
                    };
                });
                for (i = 0; i < result.length; i++) {
                    localStorage[userCard.childNodes[i].innerText] = userCard.childNodes[i+result.length].innerHTML;
                };
        }
        else {
            if (errorMessage) errorMessage.remove();
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            main.insertAdjacentElement('afterend',errorMessage);
            errorMessage.innerText = 'Данные не получены, произошла ошибка запроса. Попробуйте снова.'
        }
    };
}



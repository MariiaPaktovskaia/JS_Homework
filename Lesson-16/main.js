var main = document.getElementById('main');
var button = document.getElementsByClassName('button')[0];
var errorMessage;
var userCard;
var keys = Object.keys(localStorage);
var tabs = [];
var userFields = [];
var userPhotos = [];
var userFirstNames = [];
var userLastNames = [];

if(!localStorage.length) { 
    button.addEventListener ('click', sendXHR);
    function sendXHR () {
        if(errorMessage) errorMessage.remove();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send();
        xhr.onerror = function () {
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
                            tabs.push(tab);
                            userCard.appendChild(tab);                      
                        }
                        for (i = 0; i < result.length; i++) {
                            var userField = document.createElement('div');
                            userField.classList.add('tabContent'); 
                            userField.classList.add('tab_' + i);
                            if (userField.classList.contains('tab_0')) { 
                                userField.classList.add('checked') 
                            };
                            userFields.push(userField);
                            userCard.insertAdjacentElement('beforeend',userField);
                            var userPhoto = document.createElement('img');
                            userPhoto.src = result[i].avatar;
                            userField.appendChild(userPhoto);
                            userPhotos.push(userPhoto.src);
                            var firstName = document.createElement('p');
                            firstName.innerText = 'First name: ' + result[i].first_name;
                            userField.appendChild(firstName);
                            firstName.classList.add('aboutUser');
                            userFirstNames.push(firstName.innerText);
                            var lastName = document.createElement('p');
                            lastName.innerText = 'Last name: ' + result[i].last_name;
                            userField.appendChild(lastName);
                            lastName.classList.add('aboutUser');
                            userLastNames.push(lastName.innerText);                   
                        };
                        for (i = 0; i < result.length; i++) {
                            localStorage.setItem ( tabs[i].innerText, JSON.stringify(userPhotos[i] + ';' + userFirstNames[i] + ';' + userLastNames[i]) );
                        };                    
                    userCard.addEventListener ('click', function (event) {
                        var target = event.target;
                        if (target.classList.contains('checked') || target.tagName == 'P' || target.tagName == 'IMG') return;
                        else { 
                            for (i = 0; i < userCard.childNodes.length; i++) {                       
                                userCard.childNodes[i].classList.remove('checked');
                            }
                            target.classList.add('checked');
                                for (var i = 0; i < result.length; i++) {
                                if (userCard.childNodes[i].classList.contains('checked')) {
                                    userCard.childNodes[i+result.length].classList.add('checked')
                                };
                                };
                        };
                    });    
            }                      
            else {
                if(errorMessage) errorMessage.remove();
                    errorMessage = document.createElement('div');
                    errorMessage.classList.add('error');
                    main.insertAdjacentElement('afterend',errorMessage);
                    errorMessage.innerText = 'Данные не получены, произошла ошибка запроса. Попробуйте снова.'
            };
        };
    };
}
else {
    button.addEventListener ('click', getDataFromLS);
    function getDataFromLS () {
        if(errorMessage) errorMessage.remove();
        if (userCard) userCard.remove();
        userCard = document.createElement('div');
        main.insertAdjacentElement('afterend',userCard);
        userCard.id = 'userCard';
            for (var key of keys) {
                var forClassesKey = key.slice(key.length-1);
                var tab = document.createElement('div');
                tab.classList.add('tab_' + forClassesKey);
                tab.classList.add('tab');
                tab.innerText = key;
                tabs.push(tab);
                if (tab == tabs[0]) { 
                    tab.classList.add('checked') 
                };
                userCard.appendChild(tab);                      
            }
            for (key of keys) {
                var userField = document.createElement('div');
                userField.classList.add('tabContent'); 
                userField.classList.add('tab_' + forClassesKey);
                userFields.push(userField);
                    if (userField == userFields[0]) { 
                        userField.classList.add('checked') 
                    };
                userCard.insertAdjacentElement('beforeend',userField);
                var userPhoto = document.createElement('img');
                var value = JSON.parse( localStorage.getItem(key) );
                value = value.split(';');
                userPhoto.src = value[0];
                userField.appendChild(userPhoto);
                var firstName = document.createElement('p');
                firstName.innerText = value[1];
                userField.appendChild(firstName);
                firstName.classList.add('aboutUser');
                var lastName = document.createElement('p');
                lastName.innerText = value[2];
                userField.appendChild(lastName);
                lastName.classList.add('aboutUser');
            };
        userCard.addEventListener ('click', function (event) {
            var target = event.target;
            if (target.classList.contains('checked') || target.tagName == 'P' || target.tagName == 'IMG') return;
            else { 
                for (i = 0; i < userCard.childNodes.length; i++) {                       
                    userCard.childNodes[i].classList.remove('checked');
                }
                target.classList.add('checked');
                    for (var i = 0; i < localStorage.length; i++) {
                    if (userCard.childNodes[i].classList.contains('checked')) {
                        userCard.childNodes[i+localStorage.length].classList.add('checked')
                    };
                    };
            };
        });             
    };
}
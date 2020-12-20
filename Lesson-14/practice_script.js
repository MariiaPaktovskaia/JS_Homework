localStorage.clear();
var container = document.getElementById('container');

var firstPar = document.createElement('p');
var secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button');
var button1 = button[0];
var searchLinks = firstPar.children;

button1.onclick = changeStyles;
function changeStyles(EO) {
    for (var i = 0; i < searchLinks.length; i++) {
        searchLinks[i].classList.toggle('linksStyle');
    };
};
secondPar.addEventListener('click', function(event) {
    var target = event.target;    
    if (target.tagName === 'A') {
        event.preventDefault();
        var storedLink = window.localStorage.getItem(target.text);
            if ( !storedLink ) {
        var object ={};
        object.path = target.getAttribute('href');
        object=JSON.stringify(object);
        window.localStorage.setItem(target.text, object);
        var href = target.setAttribute('href','#');
        alert('Ссылка сохранена');
    }
    else {
        alert(JSON.parse(storedLink).path); 
    }
};
});
window.onstorage = function (event){
    window.localStorage.clear();
};



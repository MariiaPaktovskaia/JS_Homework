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
    for (var i=0; i<searchLinks.length; i++) {
        searchLinks[i].classList.add('linksStyle');
    };
};
secondPar.addEventListener("click", setBorder);
function setBorder() {
    secondPar.classList.toggle('setBorder');
};
var unclickableLinks = secondPar.children;
unclickableLinks.onclick="return false";

for (var i = 0; i < unclickableLinks.length; i++) {
    unclickableLinks[i].addEventListener("click", setAnotherBehavior);
    function setAnotherBehavior() {
        event.preventDefault();
        alert (this.getAttribute('href'));
    };
};

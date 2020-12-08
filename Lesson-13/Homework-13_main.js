function myFunction() {
    var h = document.getElementById("firstRow");
    h.insertAdjacentHTML("beforebegin", "<tr><td></td><td></td><td></td></tr>");  
};

var table = document.getElementById('firstTable')
table.onclick = function (event){ 
    var target = event.target;
    if (target.tagName != 'TD') return;
    var oldTargetValue = target.innerHTML;
    var focusedInput = document.createElement('input');
    target.innerText = "";
    target.appendChild(focusedInput);
    focusedInput.focus();
    focusedInput.value = oldTargetValue;   
    focusedInput.addEventListener('blur', saveText);
        function saveText() {
            var textInput = focusedInput.value;
            target.innerText += textInput;
        };
    focusedInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveText();
        };
    });
}


  


/*

*/
function update() {
    var x = document.getElementById('in1').value;
    var ele = document.getElementById('in3');
    var y = "";
    for (var i = 0; i < x.length; i++) {
        y += x.charAt(i);
        y += 'U+';
        y += x.charCodeAt(i).toString(16).toUpperCase();
        y += '<br>';
    }
    ele.innerHTML = y;
    document.getElementById('in2').innerHTML=
    document.getElementById('in1').value.replace('abc', '123');
}


function start(e) {
    document.getElementById('in1').addEventListener('input',update);
    update();
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );

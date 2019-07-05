/*

*/


function start(e) {
    var name=[
        {
            char:'洪',
            big5:'AC78',
            cns:'1-517B',
            unicode:'6D2A'
        },
        {
            char:'德',
            big5:'BC77',
            cns:'1-6C61',
            unicode:'5FB7'
        },
        {
            char:'易',
            big5:'A9F6',
            cns:'1-4D78',
            unicode:'6613'
        }
    ];
    var ele=document.getElementById("div1");
    for(var i=0;i<3;i++){
        ele.innerHTML+=name[i].char;
        ele.innerHTML+=' big5= ';
        ele.innerHTML+=name[i].big5;
        ele.innerHTML+=' cns= ';
        ele.innerHTML+=name[i].cns;
        ele.innerHTML+=' unicode= ';
        ele.innerHTML+=name[i].unicode;
        ele.innerHTML+='<br>';
    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );

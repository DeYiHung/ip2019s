$(function() {
    var card = ['ace-of-spades.svg','ace-of-hearts.svg','ace-of-diamonds.svg','ace-of-club.svg'];
    var arr=[1,1,1,1,2,2,2,2,3,3,3,3,0,0,0,0]
    var newarr=[]

    for(var i=0;i<16;i++){
        var random = Math.ceil(Math.random() * arr.length) - 1;
        console.log(random)
        newarr.push(arr[random]);
        arr.splice(random,1)
    }
    for(var c=0;c<16;c++){
        a=newarr[c]
        $('#d2').append ( '<img class="issue" src="./'+card[a]+ '">');
    }
$('#b1').on('click',function(){
    $('.issue').hide();
    $('#d2').html('');
    for(i=0;i<16;i++){
        $('#d2').append('<img src="./joker-card.svg">');
    }
});
});




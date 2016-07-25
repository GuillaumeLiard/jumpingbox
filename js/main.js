var start = $("#start");
var offset = start.offset();
var rotation = 0;

$('.segment').click(function(){
    var segmentOffset = $(this).offset();
    var deltaOffset = segmentOffset.top - offset.top ;
    rotation +=360;
    TweenMax.to('#box',1,{ease: Back.easeOut.config(6),top:deltaOffset});
    TweenMax.to('#box',1,{color:'blue',rotation:rotation});
});

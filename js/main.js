var start = $("#start");
var offset = start.offset();
console.log(offset);

$('.segment').click(function(){
    var segmentOffset = $(this).offset();
    var deltaOffset = segmentOffset.top - offset.top ;
    TweenMax.to('#box',1,{color:'blue',top:deltaOffset,rotation:360});
    // console.log();
});


console.log('tween started');

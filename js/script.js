

$(document).ready(function(){

$(".click").click(function(){
	alert("welcome to my world");
});
//alert
$('.enter').mouseenter(function(){
	alert("welcome to your query");
});
//hide
$('#hide').click(function(){
	$('.message').hide(1000);
});
//show
$('#show').click(function(){
	$('.message').show(1000);
});
//toggle
$('#toggle').click(function(){
	$('.allInOne').fadeToggle();
});

$('#secrect').click(function(){
	$('.box1').hide(1000);
	$('.box2').hide(1000);
	$('.box3').hide(1000);
});

$('#open').click(function(){
	$('.box1').show(1000);
	$('.box2').show(1000);
	$('.box3').show(1000);
});

$('#fIn').click(function(){
	$('.box_1').fadeIn();
	$('.box_2').fadeIn("slow");
	$('.box_3').fadeIn(2000);
});
$('#fOut').click(function(){
	$('.box_1').fadeOut();
	$('.box_2').fadeOut("slow");
	$('.box_3').fadeOut(2000);
});
$('.slideMe').click(function(){
	$('.lorem').slideToggle("slow");
});

//ANIMATION
 $('.animate').click(function(){
 	$('.animatess').animate({
 	left:'550px',
 	height:'150px',
 	width: '250px',
 	}, 1000);
 	$('.animatess').animate({
 		fontSize: '40px',
 	}, "slow");
 });

 //ANIMATON-A
   $('.go_1').click(function(){
   	$('.block_A').animate({
   		height:'60px',
   		width: '1100px',}, 1000);
    $('.block_A').animate({
   		fontSize: '25px',}, 1000);
   	$('.block_A').animate({
   		borderLeftWidth: '30px',}, 1000);
   });

//ANIMATION-B
   $('.go_2').click(function(){
    $('.block_B').animate({
      height: '60px',
      width: '1100px',
    }, 1000);
    $('.block_B').animate({
    	fontSize: '25px',
    }, 1000);
    $('.block_B').animate({
    	borderRightWidth: '30px',
    }, 1000);
   });
$('.go_3').click(function(){
	$('.go_1').add('.go_2').click();
});
$('.go_4').click(function(){
	$('.block_A').add('.block_B').css({
		width: '200px',
		height: '40px',
		fontSize: '16px',
		borderWidth: '0px'
	}, 400);
});

//SPREAD ANIMATON
$('.boX').click(function(){
	$('.boxx').animate({
		height: '300px',
		opacity: '0.4',
	}, "slow");
	$('.boxx').animate({
		width: '300px',
		opacity: '0.8',
	}, "slow");
	$('.boxx').animate({
		height: '100px',
		opacity: '0.4',
	}, "slow");
	$('.boxx').animate({
		width: '100px',
		opacity: '0.8',

	}, "slow");
});
//HIDE BUTTON

    $('.hiDe_B').click(function(){
    	$('.c_h3').hide("slow", function(){
    		alert("This Bellow Content Now Hide");
    	});
    });
//CHAINING
$('.chain_button').click(function(){
	$('#chai_P').css("color", "red")
	.slideUp(2000)
	.slideDown(2000);
});

});

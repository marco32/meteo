$(document).ready(function() {
	$.ajax('http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=0d2026f8fb6319cfa481a69379e958bf&mode=html')
	.fail(function(){
		$("#ville").append('<img src="http://clippss.free.fr/smileymechant/2%20(8).gif" alt=""/>');
	})
	.done(function(data){
		
		$("#ville").append(data);
	})	
})




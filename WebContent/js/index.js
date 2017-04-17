


/"define function:*/
	liclick=function(){
	var menu=$('#header').html();
	alert(menu);
	
	$('#content').html(menu);
	$('#content').show()
	
	$('#content').slideUp(2000, function() {
		alert('content is slide up.')
	}
	)
 }
	$('li').click(liclick);
	$('#footer').click(liclick);



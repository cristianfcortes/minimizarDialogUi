
function minimizarDialogUi(id){
	$('#'+id).parent().find('.ui-dialog-titlebar-minus').remove();
	$('#'+id).parent().find('.ui-dialog-titlebar').append(
		$('<a role="button" class="ui-dialog-titlebar-minus ui-corner-all" href="#"><span class="ui-icon ui-icon-minusthick"></span><span class="ui-icon ui-icon-plusthick" style="display: none;"></span></a>')
		.off().on('click', function (){
			$(container).toggle();
			$(this).find('.ui-icon').toggle();
			//console.log(this);
		}).on('mouseover', function(){
  	 		$(this).addClass('ui-state-hover');
		}).on('mouseleave', function(){
			$(this).removeClass('ui-state-hover');
		})
	);
}

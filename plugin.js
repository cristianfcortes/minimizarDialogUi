function minimizarDialogUi(id){
        $('#'+id).parent().find('.ui-dialog-titlebar-minus').remove();
        $('#'+id).parent().find('.ui-dialog-titlebar').append(

                $('<button role="button" class="ui-button ui-widget ui-state-default ui-dialog-titlebar-minus ui-corner-all" href="#"><span class="ui-icon ui-icon-minusthick"></span><span class="ui-icon ui-icon-plusthick" style="display: none;"></span></button>')
                .off().on('click', function (){
                        $('#'+id).toggle();
                        $(this).find('.ui-icon').toggle();
                        //console.log(this);
                }).on('mouseover', function(){
                    $(this).addClass('ui-state-hover');
                }).on('mouseleave', function(){
                    $(this).removeClass('ui-state-hover');
                })
        );
}

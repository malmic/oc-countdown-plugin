$(document).ready(function(){
    $.request('onCountdownDate',{
        success: function(data){
            $('.countdown').countdown(data.date).on('update.countdown', function(event) {
                var countdown = $(this).html(event.strftime(''
                    + '<span>%-D</span> %!D:Tag,Tage; '
                    + '<span>%H</span> Stunden '
                    + '<span>%M</span> Minuten '
                    + '<span>%S</span> Sekunden'));
            });
        }
    })
});

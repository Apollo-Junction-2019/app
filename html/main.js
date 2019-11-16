var clearfix = '<div style="clear:both;"></div>';
function addMessage(isRecipient, message) {
    $('#chatArea').append(clearfix + '<div class="message ' + (isRecipient ? '' : 'messageRight') +  '">' + message + '</div>');
    $('#chatArea').animate({
        scrollTop: $('#chatArea').get(0).scrollHeight
    }, 500);
}
//ask the ai
function sendRequest(msg, cb) {

    // MAKE SURE TO ENABLE CORS policy 'Access-Control-Allow-Origin'

      $.ajax({
        url: 'https://some.address/pong.php?q=' + msg
      })
        .done(function( data ) {
          if ( console && console.log ) {
            var json = JSON.parse(data);
            addMessage(true, json.msg);
          }
        });
}
$("#messageBox").keyup(function(event) {
    if (event.keyCode === 13) {
        if ($('#messageBox').val().trim() != '') {
            var isRecipient = false;
            if (event.shiftKey) {
                 isRecipient = true;
            } 
            addMessage(false, $('#messageBox').val());

            sendRequest( $('#messageBox').val(), function(reply) {
                addMessage(isRecipient,reply);

            });
            $('#messageBox').val('');
        }
    }
});
var clearfix = '<div style="clear:both;"></div>';
function addMessage(isRecipient, message) {
    $('#chatArea').append(clearfix + '<div class="message ' + (isRecipient ? '' : 'messageRight') +  '">' + message + '</div>');
    $('#chatArea').animate({
        scrollTop: $('#chatArea').get(0).scrollHeight
    }, 500);
}
$("#messageBox").keyup(function(event) {
    if (event.keyCode === 13) {
        if ($('#messageBox').val().trim() != '') {
            var isRecipient = false;
            if (event.shiftKey) {
                 isRecipient = true;
            } 
            addMessage(isRecipient, $('#messageBox').val());
            $('#messageBox').val('');
        }
    }
});
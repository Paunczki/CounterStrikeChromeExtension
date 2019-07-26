
$(function() {
    $("#togBtn").on('change', function(e) {
        if (e.target.checked){
            chrome.storage.local.set({'sS': true}, function(){
                //alert('saved: True');
            });
        } else {
            chrome.storage.local.set({'sS': false}, function(){
                //alert('saved: False');
            });
        }   
    });
});
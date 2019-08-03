var timeZoneza = "11";
chrome.storage.local.set({'timeZoneza':timeZoneza}, function() {});


var visTop10;
var visMatches;
var visStats;

chrome.storage.onChanged.addListener(function(){
    chrome.storage.local.get('topa10', function(status){
        visTop10 = status.top10;
        if(document.getElementById("top10").style.display === "block"){

        }
    });
});

/*
chrome.storage.onChanged.addListener(function() {
    chrome.storage.local.get('sS', function(status){
        switchStatus = status.sS;
        if(switchStatus === true){
            nowTime = Date.now();
        }
    });
});
*/


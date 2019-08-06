$(function() {
    $("#timeZones").change(function(){
        timeZoneId = $(this).children(":selected").attr("timeZoneId");
        chrome.storage.local.set({'timeZoneza': timeZoneId}, function() {});
        getTimeZone();
    });
});

var $sel = $("#timeZones");
var value = $sel.val();
var text = $("option:selected",$sel).text(); 

$(function() {
    $("#getZone").click(function(){
        getTimeZone();
    });
});

var timeZoneId;

chrome.storage.local.get('timeZoneza', function(status){
    timeZoneId=status.timeZoneza;
})

function getTimeZone(){
    chrome.storage.local.get('timeZoneza', function(status){
        timeZoneId=status.timeZoneza;
    });
    if(timeZoneId==="1") {
        alert("Current Time Zone: "+"(GMT-12:00) International Date Line West");
    }
    if(timeZoneId==="2") {
        alert("Current Time Zone: "+"(GMT-11:00) Midway Island, Samoa");
    }
    if(timeZoneId==="3") {
        alert("Current Time Zone: "+"(GMT-10:00) Hawaii");
    }
    if(timeZoneId==="4") {
        alert("Current Time Zone: "+"(GMT-09:00) Alaska");
    }
    if(timeZoneId==="5") {
        alert("Current Time Zone: "+"(GMT-08:00) Pacific Time (US & Canada)");
    }
    if(timeZoneId==="6") {
        alert("Current Time Zone: "+"(GMT-08:00) Tijuana, Baja California");
    }
    if(timeZoneId==="7") {
        alert("Current Time Zone: "+"(GMT-07:00) Arizona");
    }
    if(timeZoneId==="8") {
        alert("Current Time Zone: "+"(GMT-07:00) Chihuahua, La Paz, Mazatlan");
    }
    if(timeZoneId==="9") {
        alert("Current Time Zone: "+"(GMT-07:00) Mountain Time (US & Canada)");
    }
    if(timeZoneId==="10") {
        alert("Current Time Zone: "+"(GMT-06:00) Central America");
    }
    if(timeZoneId==="11") {
        alert("Current Time Zone: "+"(GMT-06:00) Central Time (US & Canada)");
    }
    if(timeZoneId==="12") {
        alert("Current Time Zone: "+"(GMT-06:00) Guadalajara, Mexico City, Monterrey");
    }
    if(timeZoneId==="13") {
        alert("Current Time Zone: "+"(GMT-06:00) Saskatchewan");
    }
    if(timeZoneId==="14") {
        alert("Current Time Zone: "+"(GMT-05:00) Bogota, Lima, Quito, Rio Branco<");
    }
    if(timeZoneId==="15") {
        alert("Current Time Zone: "+"(GMT-05:00) Eastern Time (US & Canada)");
    }
    if(timeZoneId==="16") {
        alert("Current Time Zone: "+"(GMT-05:00) Indiana (East)");
    }
    if(timeZoneId==="17") {
        alert("Current Time Zone: "+"(GMT-04:00) Atlantic Time (Canada)");
    }
    if(timeZoneId==="18") {
        alert("Current Time Zone: "+"(GMT-04:00) Caracas, La Paz");
    }
    if(timeZoneId==="19") {
        alert("Current Time Zone: "+"(GMT-04:00) Manaus");
    }
    if(timeZoneId==="20") {
        alert("Current Time Zone: "+"(GMT-04:00) Santiago");
    }
    if(timeZoneId==="21") {
        alert("Current Time Zone: "+"(GMT-03:30) Newfoundland");
    }
    if(timeZoneId==="22") {
        alert("Current Time Zone: "+"(GMT-03:00) Brasilia");
    }
    if(timeZoneId==="23") {
        alert("Current Time Zone: "+"(GMT-03:00) Buenos Aires, Georgetown");
    }
    if(timeZoneId==="24") {
        alert("Current Time Zone: "+"(GMT-03:00) Greenland");
    }
    if(timeZoneId==="25") {
        alert("Current Time Zone: "+"(GMT-03:00) Montevideo");
    }
    if(timeZoneId==="26") {
        alert("Current Time Zone: "+"(GMT-02:00) Mid-Atlantic");
    }
    if(timeZoneId==="27") {
        alert("Current Time Zone: "+"(GMT-01:00) Cape Verde Is.");
    }
    if(timeZoneId==="28") {
        alert("Current Time Zone: "+"(GMT-01:00) Azores");
    }
    if(timeZoneId==="29") {
        alert("Current Time Zone: "+"(GMT+00:00) Casablanca, Monrovia, Reykjavik");
    }
    if(timeZoneId==="30") {
        alert("Current Time Zone: "+"(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London");
    }
    if(timeZoneId==="31") {
        alert("Current Time Zone: "+"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna");
    }
    if(timeZoneId==="32") {
        alert("Current Time Zone: "+"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague");
    }
    if(timeZoneId==="33") {
        alert("Current Time Zone: "+"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris");
    }
    if(timeZoneId==="34") {
        alert("Current Time Zone: "+"(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb");
    }
    if(timeZoneId==="35") {
        alert("Current Time Zone: "+"(GMT+01:00) West Central Africa");
    }
    if(timeZoneId==="36") {
        alert("Current Time Zone: "+"(GMT+02:00) Amman");
    }
    if(timeZoneId==="37") {
        alert("Current Time Zone: "+"(GMT+02:00) Athens, Bucharest, Istanbul");
    }
    if(timeZoneId==="38") {
        alert("Current Time Zone: "+"(GMT+02:00) Beirut");
    }
    if(timeZoneId==="39") {
        alert("Current Time Zone: "+"(GMT+02:00) Cairo");
    }
    if(timeZoneId==="40") {
        alert("Current Time Zone: "+"(GMT+02:00) Harare, Pretoria");
    }
    if(timeZoneId==="41") {
        alert("Current Time Zone: "+"(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius");
    }
    if(timeZoneId==="42") {
        alert("Current Time Zone: "+"(GMT+02:00) Jerusalem");
    }
    if(timeZoneId==="43") {
        alert("Current Time Zone: "+"(GMT+02:00) Minsk");
    }
    if(timeZoneId==="44") {
        alert("Current Time Zone: "+"(GMT+02:00) Windhoek");
    }
    if(timeZoneId==="45") {
        alert("Current Time Zone: "+"(GMT+03:00) Kuwait, Riyadh, Baghdad");
    }
    if(timeZoneId==="46") {
        alert("Current Time Zone: "+"(GMT+03:00) Moscow, St. Petersburg, Volgograd");
    }
    if(timeZoneId==="47") {
        alert("Current Time Zone: "+"(GMT+03:00) Nairobi");
    }
    if(timeZoneId==="48") {
        alert("Current Time Zone: "+"(GMT+03:00) Tbilisi");
    }
    if(timeZoneId==="49") {
        alert("Current Time Zone: "+"(GMT+03:30) Tehran");
    }
    if(timeZoneId==="50") {
        alert("Current Time Zone: "+"(GMT+04:00) Abu Dhabi, Muscat");
    }
    if(timeZoneId==="51") {
        alert("Current Time Zone: "+"(GMT+04:00) Baku");
    }
    if(timeZoneId==="52") {
        alert("Current Time Zone: "+"(GMT+04:00) Yerevan");
    }
    if(timeZoneId==="53") {
        alert("Current Time Zone: "+"(GMT+04:30) Kabul");
    }
    if(timeZoneId==="54") {
        alert("Current Time Zone: "+"(GMT+05:00) Yekaterinburg");
    }
    if(timeZoneId==="55") {
        alert("Current Time Zone: "+"(GMT+05:00) Islamabad, Karachi, Tashkent");
    }
    if(timeZoneId==="56") {
        alert("Current Time Zone: "+"(GMT+05:30) Sri Jayawardenapura");
    }
    if(timeZoneId==="57") {
        alert("Current Time Zone: "+"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi");
    }
    if(timeZoneId==="58") {
        alert("Current Time Zone: "+"(GMT+05:45) Kathmandu");
    }
    if(timeZoneId==="59") {
        alert("Current Time Zone: "+"(GMT+06:00) Almaty, Novosibirsk");
    }
    if(timeZoneId==="60") {
        alert("Current Time Zone: "+"(GMT+06:00) Astana, Dhaka");
    }
    if(timeZoneId==="61") {
        alert("Current Time Zone: "+"(GMT+06:30) Yangon (Rangoon)");
    }
    if(timeZoneId==="62") {
        alert("Current Time Zone: "+"(GMT+07:00) Bangkok, Hanoi, Jakarta");
    }
    if(timeZoneId==="63") {
        alert("Current Time Zone: "+"(GMT+07:00) Krasnoyarsk");
    }
    if(timeZoneId==="64") {
        alert("Current Time Zone: "+"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi");
    }
    if(timeZoneId==="65") {
        alert("Current Time Zone: "+"(GMT+08:00) Kuala Lumpur, Singapore");
    }
    if(timeZoneId==="66") {
        alert("Current Time Zone: "+"(GMT+08:00) Irkutsk, Ulaan Bataar");
    }
    if(timeZoneId==="67") {
        alert("Current Time Zone: "+"(GMT+08:00) Perth");
    }
    if(timeZoneId==="68") {
        alert("Current Time Zone: "+"(GMT+08:00) Taipei");
    }
    if(timeZoneId==="69") {
        alert("Current Time Zone: "+"(GMT+09:00) Osaka, Sapporo, Tokyo");
    }
    if(timeZoneId==="70") {
        alert("Current Time Zone: "+"(GMT+09:00) Seoul");
    }
    if(timeZoneId==="71") {
        alert("Current Time Zone: "+"(GMT+09:00) Yakutsk");
    }
    if(timeZoneId==="72") {
        alert("Current Time Zone: "+"(GMT+09:30) Adelaide");
    }
    if(timeZoneId==="73") {
        alert("Current Time Zone: "+"(GMT+09:30) Darwin");
    }
    if(timeZoneId==="74") {
        alert("Current Time Zone: "+"(GMT+10:00) Brisbane");
    }
    if(timeZoneId==="75") {
        alert("Current Time Zone: "+"(GMT+10:00) Canberra, Melbourne, Sydney");
    }
    if(timeZoneId==="76") {
        alert("Current Time Zone: "+"(GMT+10:00) Hobart");
    }
    if(timeZoneId==="77") {
        alert("Current Time Zone: "+"(GMT+10:00) Guam, Port Moresby");
    }
    if(timeZoneId==="78") {
        alert("Current Time Zone: "+"(GMT+10:00) Vladivostok");
    }
    if(timeZoneId==="79") {
        alert("Current Time Zone: "+"(GMT+11:00) Magadan, Solomon Is., New Caledonia");
    }
    if(timeZoneId==="80") {
        alert("Current Time Zone: "+"(GMT+12:00) Auckland, Wellington");
    }
    if(timeZoneId==="81") {
        alert("Current Time Zone: "+"(GMT+12:00) Fiji, Kamchatka, Marshall Is.");
    }
    if(timeZoneId==="82") {
        alert("Current Time Zone: "+"(GMT+13:00) Nuku'alofa");
    }
}
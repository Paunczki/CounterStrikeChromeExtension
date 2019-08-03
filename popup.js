$(function() {
    $("#top10").click(function(){
        openTop10();
    });
});

$(function() {
    $("#matches").click(function(){
        openMatches();
    });
});

$(function() {
    $("#stats").click(function(){
        openStats();
    });
});



function openTop10(){
    document.getElementById("divTop10").style.display = "block";
    document.getElementById("divMatches").style.display = "none";
    document.getElementById("divStats").style.display = "none";
    document.body.style.height = '450px';
    document.body.style.backgroundImage = "url('/extraImages/dust2.png')";
}

function openMatches(){
    document.getElementById("divTop10").style.display = "none";
    document.getElementById("divMatches").style.display = "block";
    document.getElementById("divStats").style.display = "none";
    document.body.style.height = '305px';
    document.body.style.backgroundImage = "url('/extraImages/nade.png')";
}

function openStats(){
    document.getElementById("divTop10").style.display = "none";
    document.getElementById("divMatches").style.display = "none";
    document.getElementById("divStats").style.display = "block";
    document.body.style.height = '580px';
    document.body.style.backgroundImage = "url('/extraImages/overpass.png')";
}

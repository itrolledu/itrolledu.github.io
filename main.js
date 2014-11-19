function setLink(page) {
$.ajax({
    type: "GET",
    url: page,
    dataType: "jsonp",
}).success( function( data ) {
    $( '#siteloader' ).html( data );
});
}
$('#home').click(function(){ setLink("main.html"); return false; });
$('#mac').click(function(){ setLink("index.html"); return false; });
$('#win').click(function(){ setLink("index.html"); return false; });
$('#linux').click(function(){ setLink("index.html"); return false; });
$('#about').click(function(){ setLink("about.html"); return false; });
$('#help').click(function(){ setLink("help.html"); return false; });
$.ajax({
    type: "GET",
    url: "main.html",
    dataType: "jsonp",
}).success( function( data ) {
    $( '#siteloader' ).html( data );
});

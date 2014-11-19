function setLink(page) {
$.ajax({
    type: "GET",
    url: page,
    dataType: "jsonp",
}).success( function( data ) {
    $( 'div.siteloader' ).html( data );
});
}
$('#home').click(function(){ setLink("http://itrolledu.github.io/main.html"); return false; });
$('#mac').click(function(){ setLink("http://itrolledu.github.io/mac/index.html"); return false; });
$('#win').click(function(){ setLink("http://itrolledu.github.io/win/index.html"); return false; });
$('#linux').click(function(){ setLink("http://itrolledu.github.io/linux/index.html"); return false; });
$('#about').click(function(){ setLink("http://itrolledu.github.io/about.html"); return false; });
$('#help').click(function(){ setLink("http://itrolledu.github.io/help.html"); return false; });
$.ajax({
    type: "GET",
    url: "http://itrolledu.github.io/main.html",
    dataType: "jsonp",
}).success( function( data ) {
    $( 'div.ajax-field' ).html( data );
});

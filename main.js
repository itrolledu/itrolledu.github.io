function setLink(url) {
  	$("#siteloader").html('<object data="'+url+'" height="90%" width="100%">');
}
http://itrolledu.github.io/mac/index.html
$('#mac').click(function(){ setLink("http://itrolledu.github.io/mac/index.html"); return false; });
$('#win').click(function(){ setLink("http://itrolledu.github.io/win/index.html"); return false; });
$('#linux').click(function(){ setLink("http://itrolledu.github.io/"); return false; });
$('#about').click(function(){ setLink("http://itrolledu.github.io/"); return false; });
$('#help').click(function(){ setLink("http://itrolledu.github.io/"); return false; });
$("#siteloader").html('<object data="http://itrolledu.github.io/main.html" height="90%" width="100%">');

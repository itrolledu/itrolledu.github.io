function setLink(url) {
  	$("#siteLoader").load(url);
  	//$("#siteloader").html('<object data="'+url+'" height="90%" width="100%">');
}
$('#home').click(function(){ setLink("/main.html"); return false; });
$('#mac').click(function(){ setLink("/mac/index.html"); return false; });
$('#win').click(function(){ setLink("/win/index.html"); return false; });
$('#linux').click(function(){ setLink("/linux/index.html"); return false; });
$('#about').click(function(){ setLink("/about.html"); return false; });
$('#help').click(function(){ setLink("/help.html"); return false; });
$("#siteLoader").load("/main.html");

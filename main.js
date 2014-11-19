function setLink(page) {
function(){$.ajax({url:page,success:function(result){$("#siteloader").html(result);}});}
}
$('#home').click(function(){$.ajax({url:"main.html",success:function(result){$("#siteloader").html(result);}});} return false; });
$('#mac').click(function(){ setLink("index.html"); return false; });
$('#win').click(function(){ setLink("index.html"); return false; });
$('#linux').click(function(){ setLink("index.html"); return false; });
$('#about').click(function(){ setLink("about.html"); return false; });
$('#help').click(function(){ setLink("help.html"); return false; });
function(){$.ajax({url:"main.html",success:function(result){$("#siteloader").html(result);}});}

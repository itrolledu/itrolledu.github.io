/*function setLink(page) {
function(){$.ajax({url:page,success:function(result){$("#siteloader").html(result);}});}
}
$('#home').click(function(){$.ajax({url:"main.html",success:function(result){$("#siteloader").html(result);}});} return false; });
$('#mac').click(function(){ setLink("index.html"); return false; });
$('#win').click(function(){ setLink("index.html"); return false; });
$('#linux').click(function(){ setLink("index.html"); return false; });
$('#about').click(function(){ setLink("about.html"); return false; });
$('#help').click(function(){ setLink("help.html"); return false; });
function(){$.ajax({url:"main.html",success:function(result){$("#siteloader").html(result);}});}

var home = document.getElementById('home');
home.onclick = goHome;
/*
function(){
  $.ajax({url:"main.js",success:function(result){
    $("#content").html(result);
  }});
};
function goHome(){$.ajax({url:"main.html",success:function(result){$("#siteloader").html(result);}});};
*/
//Just use iframes...
function setLink(url) {
  	$("#siteloader").html('<iframe src="'+url+'" height="90%" width="100%">');
}
$('#home').click(function(){ setLink("http://itrolledu.github.io/main.html"); return false; });
$('#mac').click(function(){ setLink("http://itrolledu.github.io/mac/index.html"); return false; });
$('#win').click(function(){ setLink("http://itrolledu.github.io/win/index.html"); return false; });
$('#linux').click(function(){ setLink("http://itrolledu.github.io/linux/index.html"); return false; });
$('#about').click(function(){ setLink("http://itrolledu.github.io/about.html"); return false; });
$('#help').click(function(){ setLink("http://itrolledu.github.io/help.html"); return false; });
setLink("http://itrolledu.github.io/main.html");

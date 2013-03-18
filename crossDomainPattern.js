/**
 * crossDomainPattern.js
 *
 * This file is the sample which tested the kind of the cross domain of javascript.
 *
 * @example http://www.dummy.com/jsonp.php
 *          callback([
 *            {"title":null,"description":null,"url":"http:\/\/www.google.com"},
 *            {"title":null,"description":null,"url":"http:\/\/www.google.com"},
 *            {"title":null,"description":null,"url":"http:\/\/www.google.com"},
 *            {"title":null,"description":null,"url":"http:\/\/www.google.com"},
 *            {"title":null,"description":null,"url":"http:\/\/www.google.com"}
 *          ])
 *
 */

/**
 * Using hosted jquery
 */
document.write("<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>");

/**
 * [JSONP] Using <script> tag case.
 */
var callback = function(data) {
  console.log('[Using <script> tag case] ' + data);
}
var script = document.createElement('script');
script.src = 'http://www.dummy.com/jsonp.php';

/**
 * [JSONP] Using jQuery.ajax function case.
 */
(function(){
  $.ajax({
    'type'     : 'get',
    'url'      : 'http://www.dummy.com/jsonp.php',
    'jsonpCallback' : 'callback',
    'timeout'  : 5000,
    'dataType' : 'jsonp'
  })
  .done(function(data){
    if (data) {
      console.log('[Using jQuery.ajax function case] ' + data);
    }
  })
  .fail(function(jqXHR,textStatus,errorThrown ){
    console.log('[' + textStatus + '] ' + errorThrown);
  });
}());

/**
 * Using CORS (Cross-Origin Resource Sharing) case.
 *  Add the following descriptions to http://www.dummy.com/json.php
 *  header('Access-Control-Allow-Origin: *');
 */
var xmlhttp = null;
if (typeof XDomainRequest != "undefined") {
  // IE8
  xmlhttp = new XDomainRequest();
}
else if (typeof XMLHttpRequest != "undefined") {
  // firefox, safari, chorme and so on..
  xmlhttp = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
  // previous IE7
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
else {
  console.log('This blowser disable to crossdomain request. ');
}

xmlhttp.onReadyStateChange=function() {
  console.log(xmlhttp.readyState);
  if (xmlhttp.readyState == 2){
    console.log("Finish.");
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open(
  "GET",
  "http://www.dummy.com/json.php",
  true
);
xmlhttp.send();

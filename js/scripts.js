$(document).ready(function() {
 $("div#design").click(function() {
     $("div#content").toggle();
     $("div#design").toggle();
 });
 $("div#content").click(function() {
    $("div#content").toggle();
    $("div#design").toggle();
});
});
$(document).ready(function() {
  $("div#dev").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
});
  $("div#dev-content").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
});
});
$(document).ready(function() {
  $("div#product").click(function() {
    $("div#prod-content").toggle();
    $("div#product").toggle();
});
  $("div#prod-content").click(function() {
    $("div#prod-content").toggle();
   $("div#product").toggle();
});
});
var name = document.getElementByid
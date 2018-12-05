

$(document).ready(function(){
  $("#uk_core").click(function(){
    $("#core_list").toggle();
  });
});

var Filter300Plus = function(){
  $('.classcard').show() //disables multifilter by showing all currently hidden classcards
  $('.lessthan300').hide() //hides everything not matching filter
  $('.filterbutton').css("background-color", "#f1f1f1") //clears button background colors
  $('.300button').css("background-color", "#0032a0") //adds UK blue background to current filter
}


var FilterSavsDept = function(){
  $('.classcard').show()
  $('')
}

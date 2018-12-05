

$(document).ready(function(){
  $("#uk_core").click(function(){
    $("#core_list").toggle();
  });
});

$(document).ready(function(){
  $("#department_menu").click(function(){
    $("#department_list").toggle();
  });
});

var Filter300Plus = function(){ //negative filter, eliminates cards not matching filter
  $('.classcard').show() //disables multifilter by showing all currently hidden classcards
  $('.lessthan300').hide() //hides everything not matching filter
  $('.filterbutton').css("background-color", "#f1f1f1") //clears button background colors
  $('.300button').css("background-color", "#0032a0") //adds UK blue background to current filter
}


var FilterSavsDept = function(){ //positive filter, includes cards matching filter
  $('.classcard').hide()
  $('.SAVS').show()
  $('.filterbutton').css("background-color", "#f1f1f1") //clears button background colors
  $('.SAVSbutton').css("background-color", "#0032a0") //adds UK blue background to current filter
}

var DeptIconSwap = function(){
  if ($(".dept_icon").attr('src') == 'Images/add.png'){
    $(".dept_icon").attr('src','Images/subtract.png');
  }
  else {
    $(".dept_icon").attr('src','Images/add.png');
  }
}

var CoreIconSwap = function(){
  if ($(".core_icon").attr('src') == 'Images/add.png'){
    $(".core_icon").attr('src','Images/subtract.png');
  }
  else {
    $(".core_icon").attr('src','Images/add.png');
  }
}

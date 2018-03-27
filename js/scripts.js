$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();

  var max = parseInt($("#userInput1").val());
  var countBy = parseInt($("input#userInput2").val());
  var outputArray = [];
  var total1 = max/countBy

  for (var i=0; i<=total1; i+=1) {
    var total = (i*countBy);
    // debugger;
    // console.log(max);
    // console.log(countBy);

    outputArray.push(total);
    console.log(total);
    // console.log(outputArray);
    $("#user-output").append(outputArray[i] + ", ");
  }

  });
});

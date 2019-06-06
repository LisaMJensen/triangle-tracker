$(document).ready(function() {
  $("#triangle").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());



debugger;
    if (side1 === side2 && side1 === side3 && side2 === side3) {
      $("#equilateral").show();
      $("#scalene").hide();
      $("#isosceles").hide();
      $("#notTriangle").hide();

    } else if (side1 === side2 && side1 != side3 ) {
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#isosceles").show();
      $("#notTriangle").hide();

    } else if (side1 != side2 && side1 != side3 && side3 != side2) {
      $("#equilateral").hide();
      $("#scalene").show();
      $("#isosceles").hide();
      $("#notTriangle").hide();

    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#isosceles").hide();
      $("#notTriangle").show();
    }

      event.preventDefault();
    });
  });

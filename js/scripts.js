$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var hot = $("select#hot").val();
    var cold = $("select#cold").val();
    var animals = $("select#animals").val();
    var swimming = $("select#swimming").val();
    var age = $("select#age").val();

    $(".destination").hide();

    if (hot === "hotYes") {
      $("#Hawaii").show();
    } else if (hot === "hotNo") {
      $("#Antarctica").show ();
    }

    if (age === "ageYes") {
      $("#Hawaii").show();
    } else if (age === "ageNo") {
      $("#Rome").show ();
      }

    if (age === "ageYes" && swimming === "swimmingNo") {
      $("#Rome").show();
    } else if (age === "ageNo" & swimming === "swimmingYes") {
      $("#Antarctica").show();
    }

    if (animals === "animalsYes" && hot === "hotYes") {
      $("#Hawaii").show();
    } else if (animals === "animalsNo" && hot === "hotNo") {
      $("#Rome").show();
    }
    event.preventDefault();
  });
});

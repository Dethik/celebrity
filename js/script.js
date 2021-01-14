$(document).ready(function() {
  $("form#dating").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const height = parseInt($("input#height").val());
    const age = parseInt($("input#age").val());
    const income = parseInt($("input#income").val());
    const kids = parseInt($("input#kids").val());
    const divorce = $("input#divorce").val();

    if (age >= 25 && age <=40 && height >= 72 && income >= 100000) {
      $('#kimkardashian').show();
    } else if (age <= 25 && height > 68 && kids === 0) {
      $('#kyliejenner').show();
    } else if (age >= 50 && name !== "Bruce" && name !== "Robert") {
      $('#krisjenner').show();
    } else {
      $('#khloekardashian').show();
    }
  });
});
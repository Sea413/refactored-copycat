$(document).ready(function() {
$("form#copy1").submit(function(event) {
    var americainput = $("input#america").val();

     $(".america").text(americainput.toUpperCase());

    event.preventDefault();
  });
  });

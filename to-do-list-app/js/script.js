// to-do-list- web application

$(document).ready(function () {
  $("#btn1").click(function () {
    var data = $("#inputtxt").val();
    let text;

    if (data === "") {
      text = "Please fill out this field";
      $("#error").text(text);
    } else {
      $("ul").prepend("<li>" + data + '<i class="fa-solid fa-trash"></i></li>');
      $(".nofound").hide();
      $("#inputtxt").val("");
      $("#error").text("");
    }
  });

  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
});

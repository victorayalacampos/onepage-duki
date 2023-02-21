$(".alasduki-apagado").on("click", function () {
  $(".alasduki-apagado").css("display", "none");
  $(".alasduko-encendido").css("display", "none");
  $(".alasduki-encendido").css("display", "block");
  $(".alasduko-apagado").css("display", "block");
  $("#bio-duko").css("display", "none");
  $("#bio-duki").css("display", "block");
});

$(".alasduko-apagado").on("click", function () {
  $(".alasduki-encendido").css("display", "none");
  $(".alasduki-apagado").css("display", "block");
  $(".alasduko-apagado").css("display", "none");
  $(".alasduko-encendido").css("display", "block");
  $("#bio-duki").css("display", "none");
  $("#bio-duko").css("display", "block");

});
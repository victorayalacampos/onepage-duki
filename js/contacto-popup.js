$(".hola-contacto").on("click", function () {
  $("#contacto-fondo").css("display", "block");
});

$("#cerrar-popup").on("click", function () {
    $("#contacto-fondo").css("display", "none");
  });
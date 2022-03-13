
// Smooth Scroll
$(function() {
  $("a").click(function (event) {
    if (this.hash !=="") {
        event.preventDefault();
        var gato = this.hash;
        $("html, body").animate({
            scrollTop: $(gato).offset().top
        }, 900);
    }

  });
});
$(document).scroll(function(e){
  const y = $("html").scrollTop();
  if (y > 300) $("nav").addClass("nav-black")
  else $("nav").removeClass("nav-black")
})

// Alert boton enviar
$("#boton-enviar").click(function(){
    alert ("el correo fue enviado");
    });

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  })
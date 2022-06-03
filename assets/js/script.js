

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$(function(){
    $("#enviar").click(function(){
        alert("El correo fue enviado");
    });

    $('body').on('dblclick', 'p', function(){
        $(this).css('color', 'red');
    });
});


$(document).scroll(function (){
    const y = $("html").scrollTop();
    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
});
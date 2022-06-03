

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
window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    var contenido = document.getElementById("contenido");

    loader.style.display = "none";
    contenido.style.display = "block";
});

var parametrosURL = new URLSearchParams(window.location.search);
var valor = parametrosURL.get("invitado");

if(valor){
    $(".name-invited").fadeOut(2000, function() {
        $(this).html("<br>Y nos encantaría que nos acompañaras<br><strong>" + valor+"</strong>").fadeIn(900);
    });
}


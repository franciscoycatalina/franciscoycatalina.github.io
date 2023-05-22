window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    var contenido = document.getElementById("contenido");

    loader.style.display = "none";
    contenido.style.display = "block";
});

$(".nsc").fadeOut(2000, function() {
    $(this).html("¡Nos casamos!").fadeIn(1000);
});

var parametrosURL = new URLSearchParams(window.location.search);

var valor = parametrosURL.get("invitado")

if(valor){

    valor = atob(valor);
    $(".name-invited").fadeOut(4500, function() {
        $(this).html("<br>Y nos encantaría que nos acompañaras en este día especial <br><strong>" + valor+"</strong>: 30/09/23").fadeIn(2500);
    });

    $(".only-name").html("<strong>" +valor.charAt(0).toUpperCase() + valor.slice(1)+"</strong>");
}


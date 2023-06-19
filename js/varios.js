window.addEventListener("load", function() {

    var loader = document.getElementById("loader");
    var contenido = document.getElementById("contenido");

    loader.style.display = "none";
    contenido.style.display = "block";

    //updateJson();



});

$(".nsc").fadeOut(2000, function() {
    $(this).html("🎉¡Nos casamos!🎉").fadeIn(1000);
});

var parametrosURL = new URLSearchParams(window.location.search);

var valor = parametrosURL.get("invitado")

if(valor){

    valor = atob(valor);
    $(".name-invited").fadeOut(4500, function() {
        $(this).html("<br>Y nos encantaría que nos acompañaras en este día especial <strong>" + valor+"</strong>.<br><br><strong>30/09/23</strong>").fadeIn(2500);
    });

    $(".only-name").html("<strong>" +valor.charAt(0).toUpperCase() + valor.slice(1)+"</strong>");
}

function updateJson(){

    // Ruta del archivo JSON que deseas editar
const jsonUrl = 'files/list.json';



// Realiza una solicitud GET para cargar el archivo JSON
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
    
    // Realiza las modificaciones necesarias en el objeto JSON dentro de un ciclo

    data.forEach(item => {
      // Realiza las modificaciones deseadas en cada objeto del array
      // Por ejemplo, puedes cambiar el valor de una propiedad
        item.codigo = btoa(item.nombre);
        item.url = "https://franciscoycatalina.github.io/?invitado="+item.codigo;
    
    });

    // Convierte el objeto JavaScript a JSON
    const updatedJson = JSON.stringify(data);

    console.log(updatedJson)

    // Realiza una solicitud POST para guardar el archivo JSON actualizado
    fetch(jsonUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: updatedJson
    })
    .then(response => {
    if (response.ok) {
        console.log('Archivo JSON actualizado correctamente.');
    } else {
        throw new Error('Error al guardar el archivo JSON.');
    }
    })
    .catch(error => {
        console.error(error);
    });
    })
    .catch(error => {
    console.error(error);
    });

}







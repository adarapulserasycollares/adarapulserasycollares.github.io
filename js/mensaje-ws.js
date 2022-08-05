
document.getElementById("Enviar-2").addEventListener("click", function () {
    let nombre2 = document.getElementById('Nombre').value;
    let descripcion2 = document.getElementById('Descripcion').value;
    let precio2 = document.getElementById('Precio').value;
    // let inical = document.getElementById('inical').value;
    let comprador2 = document.getElementById('comprador').value;
    let numero2 = document.getElementById('numero').value;
  
    let nprecio = 1.50;

    let total = (numero2 * nprecio);

    let url =
      "https://api.whatsapp.com/send?phone=+50369694477&text=" + 
      "Hola%20mucho%20gusto%2C%20mi%20nombre%20es%20"+comprador2+
      "%20y%20la%20pulsera%20que%20deseo%20comprar%20es%3A%0A%0A*Pulsera%3A*%20%0A"
      +nombre2+"%0A%0A*Descripci%C3%B3n%3A*%20%0A"+descripcion2+
      "%0A%0A*Costo%20a%20pagar%3A*%20%0A" + "$" +total+
      "%0A%0A*Pulseras%20compradas%3A*%20%0A"+numero2+"%0A%0A*Mi%20nombre%20es%3A*%20%0A"
      +comprador2+
      "%0A%0A*Muchas Gracias por ordenar, ¡tu estilo es Increible!*";
      window.open(url);
});



document.getElementById("alert-fecha").addEventListener("click", mostrarmodal);
mostrarFecha = document.getElementById("modal-fecha")
modalFecha = document.getElementById("modal-cont-fecha")
document.getElementById("Enviar-2").addEventListener("click", cerrarmodal);


function mostrarmodal(){
    mostrarFecha.classList.add('activar');
    modalFecha.style.opacity = "1"
};

function cerrarmodal(){
    mostrarFecha.classList.remove('activar');
    modalFecha.style.opacity = "0"
};

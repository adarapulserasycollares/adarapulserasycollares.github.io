document.getElementById("Enviar-plizado").addEventListener("click", function () {
    let incDec = document.getElementById('incDec').value;
    let cuerda = document.getElementById('Cuerda').value;
    let inicial = document.getElementById('inicial').value;
    let comprador = document.getElementById('comprador').value;
    let numero = document.getElementById('numero').value; 
    
    let total = numero * 2.00;
    let url =
      "https://api.whatsapp.com/send?phone=+50369694477&text=" + 
      "*PULSERA%20PERSONALIZADA*%0A%0AHola%20mucho%20gusto%2C%20mi%20nombre%20es%20" + comprador
      +"%20y%20deseo%20pedir%20esta%20pulsera%20personalizada%3A%0A%0A*Tipo%20de%20forma%20elegida%3A*%0A"+incDec+"%0A%0A*Tipo%20cuerda%20elegida%3A*%0A"+cuerda+
      "%0A%0A*Inicial%20o%20forma%20elegida%20%3A*%0A" + inicial + "%0A%0A*Numero%20de%20pulseras%20con%20este%20dise%C3%B1o%3A*%0A"+numero+"%0A%0A*Costo%20total%20%3A*%0A"+total + "%20Dolares" + "%0A%0A*Nombre%3A*%20%0A"
      + comprador + "%0A%0A*%C2%A1Tu%20estilo%20esta%20increible!%";
      window.open(url);
  });

  document.getElementById("mostrar").addEventListener("click", mostrarmodal);
  mostrarFecha = document.getElementById("modal-fecha")
  modalFecha = document.getElementById("modal-cont-fecha")
  document.getElementById("Enviar-plizado").addEventListener("click", cerrarmodal);
  
  
  function mostrarmodal(){
      mostrarFecha.classList.add('activar');
      modalFecha.style.opacity = "1"
  };
  
  function cerrarmodal(){
      mostrarFecha.classList.remove('activar');
      modalFecha.style.opacity = "0"
  };

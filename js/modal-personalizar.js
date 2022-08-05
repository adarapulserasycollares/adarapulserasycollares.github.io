document.getElementById("mostrar").addEventListener("click", mostrar);
contModal = document.getElementById("modal-personalizar");
opciones = document.getElementById("opciones");
document.getElementById("salir").addEventListener("click", quitar);


function mostrar(){
    contModal.classList.add('mostrar');
    opciones.style.top = "0px"
};

function quitar(){
    contModal.classList.remove('mostrar');
    opciones.style.top = "15000px"
};



document.getElementById("cancelar").addEventListener("click", mostrarmodal);
mostrar = document.getElementById("modal-cancelar")
modal = document.getElementById("modal")
document.getElementById("seguir").addEventListener("click", quitarmodal);
document.getElementById("cancelar-compra").addEventListener("click", cancelar);


function mostrarmodal(){
    mostrar.classList.add('activar');
    modal.style.opacity = "1"
};

function quitarmodal(){
    mostrar.classList.remove('activar');
    modal.style.opacity = "0"
};

function cancelar(){
    location.href ="index.html";
};



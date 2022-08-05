document.getElementById("img-2").addEventListener("click", mostrarfoto);
img = document.getElementById("img-2");
producto = document.getElementById("producto");
document.getElementById("cerrar-foto").addEventListener("click", quitarfoto);


function mostrarfoto(){
    img.classList.add('img-producto-modal');
    producto.classList.add('cont-img-modal')
};

function quitarfoto(){
    img.classList.remove('img-producto-modal');
    producto.classList.remove('cont-img-modal')
};

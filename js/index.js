document.getElementById("open-nav").addEventListener("click", mostrarmenu);
nav = document.getElementById("nav");
document.getElementById("cerrar").addEventListener("click", quitarmenu);
cerrar = document.getElementById("cerrar");

function mostrarmenu(){
    nav.style.opacity ="1";
    nav.classList.add('acceso');
    cerrar.style.display = "flex"
};

function quitarmenu(){
    nav.style.opacity ="0";
    nav.classList.remove('acceso');
    cerrar.style.display = "none"

};



document.querySelectorAll('.producto img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display ='block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display ='none';

}
    






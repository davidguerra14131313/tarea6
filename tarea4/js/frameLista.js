let mainFrame = document.querySelector("#iframe");
let menuListadoProducto = document.querySelector("#botonProductos");

const mostrarListadoProductos = (event) => {
    event.preventDefault();
    mainFrame.src = "../ListaProductos.html";
};

const mostrarhome =()=> 
{
    event.preventDefault();
    mainFrame.src = "../producto.html";  
}
window.addEventListener('load',mostrarhome);
menuListadoProducto.addEventListener('click',mostrarListadoProductos)

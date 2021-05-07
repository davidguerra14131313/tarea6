let mainFrame = document.querySelector("#iframe");
let menuListadoProducto = document.querySelector("#botonProductos");
let menuhome =document.querySelector("#botonInicio")


const mostrarListadoProductos = (event) => {
    event.preventDefault();
    mainFrame.src = "../ListaProductos.html";
};
menuListadoProducto.addEventListener('click',mostrarListadoProductos);



const cargarpagina =(event)=> 
{event.preventDefault();
    window.localStorage.setItem("id",0)
    event.preventDefault();
    mainFrame.src = "../producto.html";  
}
window.addEventListener('load',cargarpagina);


const mostrarhome=(event)=>
{event.preventDefault();
    window.localStorage.setItem("id",0)
    mainFrame.src="../producto.html";
}   
menuhome.addEventListener('click',mostrarhome);



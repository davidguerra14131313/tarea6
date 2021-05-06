let selectCategoria =document.querySelector('#selectCategoria');
let textCodigo =document.querySelector('#textoCodigo');
let textNombre =document.querySelector('#textoNombre');
let textDescripcion=document.querySelector('#textoDescripcion')
let textRuc =document.querySelector('#textoRuc');
let textProveedor =document.querySelector('#textoProveedor');
let textPrecio =document.querySelector('#textoPrecio');
let textFecha =document.querySelector('#textoFecha');
let radioActivo =document.querySelector('#radioActivo');
let radioSuspendido=document.querySelector('#radioSuspendido');
let radioBaja =document.querySelector('#radioBaja');
let checkboxAcepto=document.querySelector('#checkboxAcepto');
let botonGrabar= document.querySelector('#botonGrabar');
let botonLimpiar =document.querySelector('#botonLimpiar')


const uriProducto='https://disenoydesarrolloweb.azurewebsites.net/api/Producto';
const uriCategoria='https://disenoydesarrolloweb.azurewebsites.net/api/Producto/Categorias';

const  mostrarCategoria=(event)=>
{   event.preventDefault()

   
    fetch(uriCategoria)
    .then(response=>response.json())
    .then(data=> {
        data.categorias.forEach(elementoOf => {
           
            selectCategoria.innerHTML+= '<option>'+elementoOf+'</option>' 

        })});      
}

const agregarproducto=(event)=>
{ 
    event.preventDefault();
    let codigo=textoCodigo.value
    let nombre=textoNombre.value
    let descripcion=textDescripcion.value
    let categoria=selectCategoria.value
    let ruc=textRuc.value
    let proveedor=textProveedor.value
    let precio=textPrecio.value;
    let fecha=textFecha.value

    let producto={"codigo":codigo,"nombre":nombre,"descripcion":descripcion,"ruc":ruc,"proveedor":proveedor,"precio":precio,"fechaIngreso":fecha,"categoria":categoria,"esActivo":true}
    
    fetch(uriProducto,
    {
        method: 'POST',
        headers:{ 'Content-Type':'application/json'},
        body:  JSON.stringify(producto),

    })
    .then(response=>response.json())
    .then(
       
          alert("se envio datos ")
        )
    .catch(
        alert("se envio datos ")
    )

}

window.addEventListener('load',mostrarCategoria);
botonGrabar.addEventListener('click',agregarproducto);
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

let codigo=textoCodigo.value
let nombre=textoNombre.value
let descripcion=textDescripcion.value
let categoria=selectCategoria.value
let ruc=textRuc.value
let proveedor=textProveedor.value
let precio=textPrecio.value
let fecha=textFecha.value
let id=0
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
//


const  grabarProducto=(event)=>
{event.preventDefault();
    let id=window.localStorage.getItem("id")
    if(id)
    {
        modificardatos(event)
        
    }
    else
    {
        agregarproducto(event)
    }
}


const agregarproducto=(event)=>
{     let codigo=textoCodigo.value
    let nombre=textoNombre.value
    let descripcion=textDescripcion.value
    let categoria=selectCategoria.value
    let ruc=textRuc.value
    let proveedor=textProveedor.value
    let precio=textPrecio.value;
    let fecha=textFecha.value
    event.preventDefault();

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
    

}
const modificardatos=(event)=>
{
    let codigo=textoCodigo.value
    let nombre=textoNombre.value
    let descripcion=textDescripcion.value
    let categoria=selectCategoria.value
    let ruc=textRuc.value
    let proveedor=textProveedor.value   
    let precio=textPrecio.value;
    let fecha=textFecha.value
        
    let objetoProducto={"codigo":codigo,"nombre":nombre,"descripcion":descripcion,"precio":precio,"ruc":ruc,"proveedor":proveedor,"categoria":categoria,"fechaIngreso":textFecha.value,"esActivo":true}
    let id=window.localStorage.getItem('id');
    fetch((uriProducto+"/"+id),
    {
        method:"PUT",
        body:JSON.stringify(objetoProducto),
        headers:
        {
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(data=> 
        alert("producto modificado"))
}

const obtenerProducto=(event)=>
{event.preventDefault();

   let id=window.localStorage.getItem('id');

    fetch(uriProducto+"/"+id)
    .then(response=>response.json())
    .then(data=> 
        {
            textoCodigo.value=data.codigo;
            textoNombre.value=data.nombre;
            textDescripcion.value=data.descripcion;
            selectCategoria.value=data.categoria;
            textRuc.value=data.ruc;
            textProveedor.value=data.proveedor;
            textPrecio.value=data.precio;
            textFecha.value=data.fechaIngreso;
    } )
}
window.addEventListener('load',obtenerProducto);
window.addEventListener('load',mostrarCategoria);

botonGrabar.addEventListener('click',grabarProducto);
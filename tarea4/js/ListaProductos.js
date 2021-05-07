let selectCategoria=document.querySelector("#selectcategoria");
let textProducto=document.querySelector("#textoNombreProducto");
let botonBuscar=document.querySelector("#botonbuscar");
let contenidoTabla=document.querySelector('#contenidoTabla');
let body=document.querySelector('body');


const uriCategoria = 'https://disenoydesarrolloweb.azurewebsites.net/api/Producto/Categorias';
const uriProducto='https://disenoydesarrolloweb.azurewebsites.net/api/Producto';

const mostrarCategoria=(event)=>
{   
    event.preventDefault()

    fetch(uriCategoria)
    .then(response=>response.json())
    .then(data=>
        {
          data.categorias.forEach(elementOf => {
             selectCategoria.innerHTML+= '<option>'+elementOf+'</option>'
          })
        });
}

const llenartabla=(data)=>
{  
    let contenido=''
    contenidoTabla.innerHTML=''
    data.forEach((elementof,indexIn) => {
        contenido+=
        '<tr><td>'+(indexIn+1)+
        '</td><td>'+elementof.id+
        '</td><td>'+elementof.codigo+
        '</td><td>'+elementof.nombre+
        '</td><td>'+elementof.categoria+
        '</td><td>'+elementof.precio+
        '</td><td>'+elementof.proveedor+
        `</td><td><input type="image"src="../imagen/editicon.jpg" class="botoneditar" id="botoneditar"value=${elementof.id}>
        <input type="image" src="../imagen/deleteicon2.jpg"  class="botoneliminar" id="botoneliminar"value=${elementof.id}></td></tr>`
    })
    contenidoTabla.innerHTML=contenido  
}

const eliminarProducto=(event)=>
{   event.preventDefault();
    if(event.target.className=="botoneliminar")
    {
        let mensajeconfirmador =window.confirm("Seguro que deseas eliminarlo")
        if(mensajeconfirmador)
        {
            fetch(uriProducto+"/"+event.target.value,
            {
                method:'DELETE',
            })
            .then(response=>response.json())
            .then(data=>
                {
                    buscarProducto(event)
                } )
            .catch(error=>
                {
                    alert("error al eliminar")
                    buscarProducto(event)
                })
        }
        else
        {
            buscarProducto(event)
            alert("proceso de eliminacion cancelado")
        }
    }
    
}
const buscarProducto=(event)=>
{   event.preventDefault();
    let categoria=selectCategoria.value
    let producto=textProducto.value
 
    fetch(uriProducto+'?categoria='+categoria+'&nombre='+producto)
    .then(response=>response.json())
    .then(data=>llenartabla(data))
  
}
const editarProducto=(event)=>
{event.preventDefault()
   if(event.target.className=="botoneditar" )

   {
    window.localStorage.setItem("id",event.target.value)
    window.location.href="../producto.html"
   }

}

botonBuscar.addEventListener('click',buscarProducto);
window.addEventListener('load',mostrarCategoria);
body.addEventListener('click',eliminarProducto);
body.addEventListener('click',editarProducto);
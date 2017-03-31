var contador = 1;
function agregarTarea(event) {
    event.preventDefault();
    
    var articulo = document.createElement("article");
    var entrada = document.createElement("input");
    var etiqueta = document.createElement("label");
    var boton = document.createElement("button");
    
    var tarea = document.getElementById("mensaje");
    
    var id = "check" + contador;
    
    entrada.type = "checkbox";
    entrada.onclick = tachar;
    entrada.id = id;
    
    
    etiqueta.setAttribute("for", id);
    
    etiqueta.innerText = tarea.value;
    
    boton.type = "button";
    boton.innerText = "Eliminar";
    boton.onclick = borrar;
    
    articulo.appendChild(entrada);
    articulo.appendChild(etiqueta);
    articulo.appendChild(boton);
    
    document.getElementById("tareas").appendChild(articulo);
    
    contador++;
    
    tarea.value = " ";
    
}

function tachar(){
        var checked = this.checked;
        var texto =this.nextSibling;
        if(checked){
        texto.style.textDecoration = "line-through";
        } else {
        texto.style.textDecoration = null;
        }
}

function borrar(){
        this.parentElement.remove();
    }



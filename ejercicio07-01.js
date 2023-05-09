/* Declarar un array vacio */
let listaDatos = new Array();

/* Agregar eventos a los botones */
let btnAddInicio = document.querySelector("#addInicio");
btnAddInicio.addEventListener("click",addInicio);
let btnAddFinal = document.querySelector("#addFinal");
btnAddFinal.addEventListener("click",addFinal);
let btnDelInicio = document.querySelector("#delInicio");
btnDelInicio.addEventListener("click",delInicio);
let btnDelFinal = document.querySelector("#delFinal");
btnDelFinal.addEventListener("click",delFinal);

/* Funciones de botones */
function addInicio(){
    let dato = prompt("Ingrese un valor:");
    listaDatos.unshift(dato);
    actualizaLista();
}
function addFinal(){
    let dato = prompt("Ingrese un valor:");
    listaDatos.push(dato);
    actualizaLista();
}
function delInicio(){
    let seguro = confirm("¿Está seguro?");
    if(seguro){listaDatos.shift()};
    actualizaLista();
}
function delFinal(){
    let seguro = confirm("¿Está seguro?");
    if(seguro){listaDatos.pop()};
    actualizaLista();
}

/* Función actualizar lista */
function actualizaLista(){
    /* Vacia la lista */
    let elementoLista = document.querySelector("#listaDatos");
    elementoLista.innerHTML = "";
    /* Llenar lista */
    listaDatos.forEach(elemento => {
        let nuevoElemento = document.createElement("option");
        nuevoElemento.innerHTML = elemento;
        elementoLista.appendChild(nuevoElemento);
    })
}


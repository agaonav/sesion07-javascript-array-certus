/* Definir un array */
let arrayNumeros = new Array();

/* Solicitar ingresar 10 números */
for (let i = 0; i < 10; i++) {
    let tmpDato = parseInt(prompt("Ingrese un número ("+(i+1)+"/10)"));
    arrayNumeros.push(tmpDato);
}

/* Declarar variables contadoras */
let contCeros = 0;
let contPositivos = 0;
let contNegativos = 0;

/* Recorrer los elementos */
arrayNumeros.forEach(elemento => {
    /* Aplicar condiciones y contar */
    if(elemento == 0 || isNaN(elemento)){
        contCeros += 1;
    }
    if(elemento > 0){
        contPositivos += 1;
    }
    if(elemento < 0){
        contNegativos += 1;
    }
});

/* Imprimir resultados en Body */
let cuerpo = document.querySelector("body");
cuerpo.innerHTML = `
<p>Números positivos: ${contPositivos}</p>
<p>Números negativos: ${contNegativos}</p>
<p>Números ceros: ${contCeros}</p>
`;
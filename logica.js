//variables
let Ingresos = [];

let gastosCasa = [5,6,8,2,5];
let gastosGustos = [];
let gastosAuto = [];
let gastosTarjeta = [];

let totalCasa;

let montoActual;
let gastosTotales;



let sumaLista;

gastosTotales = sumar(gastosCasa) + sumar(gastosGustos) + sumar(gastosAuto) + sumar(gastosTarjeta);

montoActual = sumar(Ingresos) - gastosTotales;

let momento2;

//Helpers
function sumar(lista){

    sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
     const monto = sumaLista;
    return monto
    
};

function totalGastos(gastosCasa){
    totalCasa = sumar(gastosCasa) + totalCasa;
    return totalCasa;
};

function totalGastos(lista){
    sumar(lista);
    
        total = sumaLista;
    return total;
}
//suma gastos 






function ButtonAgregarIngreso(){
    const input = document.getElementById("inputIngreso")
    const monto = Number(input.value);
    
    Ingresos.push (monto);

}

function ButtonAgregarGasto(){
    const input = document.getElementById('crear Elemento')
    const monto = Number(input.value);
    const tipoDeGasto = document.getElementById ('tipo de gasto');

    tipoDeGasto.push (monto);

}

// con java puedo crear el menu desplegable 
// cuando hace click sobre el contenedor, aparece el texto invisible 

function MenuDesplegable(){
    const CargarListaAritmetica = document.getElementById("CargarListaMediana");
    CargarListaAritmetica.innerText = desplegado;
}
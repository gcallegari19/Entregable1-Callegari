// Esta entrega simula un portal de cotizacion de prestamo y/o inversion

// Pide nombre para iniciar cotizacion
function solicitaNombre(){
    const nombre = prompt('Ingresa tu nombre');
    alert("Hola! Bienvenid@ "+nombre);}

solicitaNombre()

// El usuario podra elegir que quiere cotizar, si un prestamo personal o un plazo fijo
function preguntaSeleccion(){
    let eleccion = parseInt(prompt('Por favor ingrese la opcion para el producto que desea cotizar: 1 - Prestamo personal 2 - Plazo Fijo'));
    switch(eleccion){
        case 1:
            // calcular prestamo
            calcularValorCuota()
            contSimul()
            break;
        case 2:
            // Calcular Monto Plazo Fijo
            calcularImportePlazoFijo()
            contSimul()
            break;
        default:
            alert('Ingreso de una opcion invalida')}
        } 

preguntaSeleccion()

// Genera funcion de continuar con el simulador
function contSimul(){
    let respuesta = prompt("¿Desea continuar? si/no")
        if (respuesta === "si"){
            preguntaSeleccion()
        }else{
            alert("¡Gracias por consultar nuestro cotizador!")
        };
            }


// Calculo de cuota prestamo personal
function calcularValorCuota() {    
    // Calculo monto del prestamo
    const montoPrestamo = parseFloat(prompt('Ingresa el monto de prestamo que queres solicitar'));
    const meses = parseFloat(prompt('Ingresa la cantidad de cuotas o meses totales del prestamo (maximo 60 cuotas).'));
    let tasaInteresActual = 102;
    const interesPrestamo = (montoPrestamo * (tasaInteresActual / 100)) / meses;
    const cuota = ((montoPrestamo / meses) + interesPrestamo);
    if(meses<=60){
        alert('La cuota total del prestamo que consultaste sera de: $'+(cuota.toFixed(2)));
        return (cuota.toFixed(2));
    }else{
        alert('El numero de cuotas que ingresaste es incorrecto')}
}


// Calculo de importe total plazo fijo
function calcularImportePlazoFijo() {
    // Calculo plazo fijo
    const montoPlazoFijo = parseFloat(prompt('Ingresa el monto del plazo fijo que quisieras realizar (importe minimo $1000).'));
    const dias = parseFloat(prompt('Ingresa los dias durante los cuales queres realizar el plazo fijo (minimo 30 dias).'));
    let tasaNominalAnual = 97;
    const interesPlazoFijo = (montoPlazoFijo * (tasaNominalAnual / 100)) / 12;
    const importePlazoFijo = montoPlazoFijo + interesPlazoFijo;

    alert('El importe total del plazo fijo en '+dias+' dias es $'+importePlazoFijo.toFixed(2));
}





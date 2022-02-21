
/* FUNCION QUE CRE EL ARRAY  */

class Prestamos{
    constructor(nombre , edad , dni , montoSolicitado , cantidad_Cuotas){

        this.nombre = nombre;
        this.edad = edad,
        this.dni = dni;
        this.montoSolicitado = montoSolicitado;
        this.cantidad_Cuotas = cantidad_Cuotas;

    }
}


var prestamosDados = [];
/* FUNCION PRICIPAL QUE  HACE QUE TODA LA SECCION  FUNCIONE */
function procesar(e){
    e.preventDefault();
        if (localStorage.getItem("Lista Clientes") != null){
        var local= JSON.parse( localStorage.getItem("Lista Clientes"));        
        for (item of local){
            prestamosDados.push ( item);
            console.log (local);
            console.log (prestamosDados);
        }
}

let nombre = document.getElementById("nameCompleto").value;
 let edad = document.getElementById("Age").value;
let dni = document.getElementById("Dni").value;
let montoSolicitado =  parseInt( document.getElementById("montoSolicitado").value);
let cantidad_Cuotas =  parseInt( document.getElementById("numerocuotas").value);    
let inTeres  = parseInt(  document.getElementById("Intereses"). value); 
let interesApagar = parseInt( document.getElementById("montoSolicitado").value ) * parseInt( document.getElementById("Intereses").value) / 100; 
let montoTotal = parseInt (document.getElementById("montoSolicitado").value) + parseInt( (montoSolicitado * document.getElementById("Intereses").value / 100) )
let totalCuota = parseInt (montoTotal) / parseInt( document.getElementById("numerocuotas").value);

prestamosDados.push( new Prestamos (nombre , edad , dni , montoSolicitado , cantidad_Cuotas) );
console.log (prestamosDados);

let  guardarLocal = (clave,valor) => {localStorage.setItem (clave,valor)};
guardarLocal("Lista Clientes", JSON.stringify(prestamosDados));



function valorCuota(e) {
    let interesApagar = montoSolicitado * inTeres ;
    interesApagar

    let totalCuota = montoTotal / cantidad_Cuotas;
    totalCuota       
}

valorCuota( )



let contenedor = document.getElementById ("contenedor");
    for (clientes  of prestamosDados) {                            
        contenedor.innerHTML = 
        `<h2>Hola ${nombre}, con DNI ${dni} y con ${ edad} años </h2>
         <p>Para el  monto ${ "$" + montoSolicitado}, el interes es de ${ "$" + interesApagar}</p>
         <p> La cantidaad de cuotas seran: ${cantidad_Cuotas}</p>
        <p> El monto total es de: ${ "$" + montoTotal} y el valor de las cuotas será de: ${ "$" + totalCuota}.</p>`;            
    }
} 



// EVENTO QUE IMPIDE EL SUBMIT DE DEFAULT//

$("#botonEnviar").on("click" , procesar)




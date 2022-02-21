function validarConsulta () {

    let  nombre = $("#nombre").val();
    let email  = $("#inputEmail4").val();
    let  telefono = $("#telefono").val();
    let comoConocio = $("#redesSociales").val();
    let consulta  = $("#consulta").val();

    if (nombre || email || telefono || comoConocio || consulta != "") {


        $("#mensaje").append("<p>" + "En breve nos estaremos comunicando con usted, muchas gracias por elegirnos" +"</p>")

    }

    

}
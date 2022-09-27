// me van a dar una distancia, determinar el medio de transporte
// condiciones: si va a menos de 1000 m = pie . de 1000 a 10 mil = bici. de 10 mil a 30 mil = colectivo.

const transporte = ( distancia ) => {
    var pie = " Pie"
    var bicicleta = "Bicicleta"
    var colectivo = "Colectivo"
    var auto = "Auto"
    var avion = "Avion"

    if (0 <= distancia && distancia < 1000 ){
        return pie
    }
    else if (1000<=distancia && distancia<10000){
        return bicicleta
    }
    else if (10000<=distancia && distancia<30000){
        return colectivo
    }
    else if (30000<=distancia && distancia<100000){
        return auto 
    }
    else if (distancia>100000){
        return avion 
    }
 else {
    return "no existen distancias negativas"
}


}

// console.log(transporte(-1))
// console.log(transporte(0))
// console.log(transporte(2000))
// console.log(transporte(20000))
// console.log(transporte(40000))
// console.log(transporte(400000000))
// console.log('holaaaaa')


var arr = [1,2,3,4,5,6,7,8,9,10];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

 console.log(max,"maximo valor del array")

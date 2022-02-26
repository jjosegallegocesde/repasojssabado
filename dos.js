//funcion ppara separar una cadena de texto
/*function nombrarPiloto (cadenaTexto){
    return(cadenaTexto.split(":")[1])
}*/
let nombrarPiloto=cadenaTexto=>cadenaTexto.split(":")[1]


//llamando la función
console.log (nombrarPiloto("ABC1234:Juan José"))
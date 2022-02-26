//funcion tradicional para calcular
//la distancia entyre 2 puntos

/*function calcularDistancia(x1,y1,x2,y2){
    return(Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)))
}*/

let calcularDistancia=(x1,y1,x2,y2)=>(Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)))


//llamado a la funcion
let distancia=calcularDistancia(0,0,-10,-10).toFixed(2)
console.log(`la distancia calculada es ${distancia}`)
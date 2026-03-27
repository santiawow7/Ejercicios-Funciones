function contarVocales(frase){
    let contador = 0
    for(let letra of frase){
        if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
            contador++
        }
    }
    return `La palabra tiene ${contador} vocales`
}

console.log(contarVocales("estrenocleidomasteoideo"))
function saludo(nombre, momento){
    if(momento==null||momento==""){console.log("Ingrese un momento correcto")}
    else if(momento.toLowerCase()=="manana"){
        return console.log("Buenos dias " + nombre)
    }else if(momento.toLowerCase()=="tarde"){
        return console.log("Buenos tardes " + nombre)
    }else
        return console.log("Buenas noches " + nombre)
}
saludo("Santiago","manana")
saludo("Santiago","tarde")
saludo("Santiago","noche")
saludo("Santiago","")
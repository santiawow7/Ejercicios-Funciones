function calcularPropina(cuenta , porcentaje_tip){
    tip = cuenta * ( porcentaje_tip * 0.01)
    total = cuenta + tip
    return console.log("El total de su cuenta es" + total+"\n"+"con una propina del " + porcentaje_tip +"%")
}

calcularPropina(10000,10)
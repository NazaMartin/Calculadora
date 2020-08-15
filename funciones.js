var operandoA = 0
var operandoB = 0
var operacion = ""
var res = 0





function init(){
    var resultado = document.getElementById("resultado")
    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var multi = document.getElementById("multi")
    var divi = document.getElementById("divicion")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")
    var reset = document.getElementById("reset")
    var igual = document.getElementById("igual")

   
    function resetear(){
        resultado.textContent = ""
        operandoA = 0
        operandoB = 0
        operacion = ""
    }

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "1"
        } else{
            operandoB += "1"
        }
    }
        
    
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "2"
        } else{
            operandoB += "2"
        }
    }
    
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "3"
        } else{
            operandoB += "3"
        }
    }
    
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "4"
        } else{
            operandoB += "4"
        }
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "5"
        } else{
            operandoB += "5"
        }
    }    

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "6"
        } else{
            operandoB += "6"
        }
    }
        
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "7"
        } else{
            operandoB += "7"
        }
    }
        
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "8"
        } else{
            operandoB += "8"
        }
    }
    
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "9"
        } else{
            operandoB += "9"
        }
    }
        
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
        if (operacion === ""){
            operandoA = resultado.textContent
        } else if (operandoB === ""){
        operandoB = "0"
        } else{
            operandoB += "0"
        }
    }
    

    reset.onclick = function(e){
        resetear()
    }

    suma.onclick = function(e){
        resultado.textContent = resultado.textContent + "+" 
        operacion = "+"
    }

    resta.onclick = function(e){
        resultado.textContent = resultado.textContent + "-"
        operacion = "-"
    }

    multi.onclick = function(e){
        resultado.textContent = resultado.textContent + "*"
        operacion = "*"
    }

    divi.onclick = function(e){
        resultado.textContent = resultado.textContent + "/"
        operacion = "/"
    }

    igual.onclick = function(e){
        resolver()
    }

    function limpiar(){
        resultado.textContent = ""

    }



    function resolver(){
        switch (operacion){
            case "+":
                res = (parseInt(operandoA) + parseInt(operandoB))
                break;
            case "-":
                res = parseInt(operandoA) - parseInt(operandoB)
                break;     
            case "*":
                res = parseInt(operandoA) * parseInt(operandoB)
                break;
            case "/":
                res = parseInt(operandoA) / parseInt(operandoB)
                break;
        }
        
        resultado.textContent = res
        operandoA = res
}
}



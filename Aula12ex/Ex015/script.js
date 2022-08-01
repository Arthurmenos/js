function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var Fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if(Fano.value.length == 0 || Number(Fano.value) > ano) {
        windows.alert("[ERRO] Verifique os dados e tente novamente!")
    } else { 
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(Fano.value)
        var gender = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
    }
    if (fsex[0].checked) {
        gender = " homem"
        if (idade >=0 && idade < 4 ){
            // Bebê  
            img.setAttribute("src", "Bebê-H,png.png")  
         }  else if (idade < 13) {
            // Criança
            img.setAttribute("src", "Criança-H.png")
         } else if (idade < 21) {
             //Jovem
             img.setAttribute("src", "Jovem-H.png")
         } else if (idade < 50) {
             //Adulto
             img.setAttribute("src", "Adulto-H.png")
         } else {
             //Idoso 
             img.setAttribute("src", "Idoso.H.png")
         }
     } else if (fsex[1].checked) {
        gender = "a mulher"
        if (idade >=0 && idade < 4 ) {
        // Bebê  
        img.setAttribute("src", "Bebê-M.png")  
     }  else if (idade < 10) {
        // Criança
        img.setAttribute("src", "Criança-M.png")
     } else if (idade < 21) {
         //Jovem
         img.setAttribute("src", "Jovem-M.png")
     } else if (idade < 50) {
         //Adulto
         img.setAttribute("src", "Adulta-M.png")
     } else {
         //Idoso 
         img.setAttribute("src", "Idosa-M.png")
     }
     }
         
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos um${gender} com ${idade} anos.` 
    res.appendChild(img)
    }
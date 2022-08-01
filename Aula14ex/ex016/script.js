function contar() {
    var inicio = document.getElementById("txti").value
    var fim = document.getElementById("txtf").value
    var passos = document.getElementById("txtp").value
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert("DADOS INVÁLIDOS!")
    } else { 
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passos)
        res.innerHTML = "Contando:"
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} 👉`
        }
        res.innerHTML += "🏁"
    }
}


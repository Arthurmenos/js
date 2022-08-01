function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getDate()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}.`
        if (hora >= 5 && hora < 12){
            // BOM DIA
            img.src = "fotomanha.png"
            document.body.style.background = '#151209'
        } else if (hora >= 12 && hora < 18) {
            // BOA TARDE
            img.src = "fototarde.png"
            document.body.style.background = '#ff9f14'
        } else {
            // Boa noite
            img.src = "fotonoite.png"
            document.body.style.background = '#0a181b'
            }
        }


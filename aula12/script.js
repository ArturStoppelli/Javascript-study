function carregar() {
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.innerHTML = `<img src="ex014/manha.jpg.jpg">`
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.innerHTML = `<img src="ex014/manha.jpg.jpg">`
} else {
    //BAO NOITE
    img.innerHTML = `<img src="ex014/manha.jpg.jpg">`
} 
}
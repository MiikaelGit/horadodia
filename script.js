var agora = new Date()
var hora = agora.getHours()

document.getElementById('horas').innerHTML = hora
if (hora >= 5 && hora < 12) {
    document.getElementById('corpo').style.background = "lightblue"
    document.getElementById('img').innerHTML = '<img src="manha.jpg" alt="foto do dia">'
} else if (hora >= 12 && hora < 19) {
    document.getElementById('corpo').style.background = "orange"
    document.getElementById('img').innerHTML = '<img src="tarde.jpg" alt="foto da tarde">'
} else {
    document.getElementById('corpo').style.background = "gray"
    document.getElementById('img').innerHTML = '<img src="noite.jpg" alt="foto da noite">'
} 
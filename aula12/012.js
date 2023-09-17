var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var data = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log (`Agora são exatamente ${hora}:${minutos}h, de ${data}/${mes}/${ano}.`)
if (hora < 12) {
    console.log('Boa Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

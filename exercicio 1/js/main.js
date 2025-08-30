let datetime = new Date()
let horastext = document.getElementById('horas')
let horas = datetime.getHours()
let image = document.querySelector('#imagem')
let autor = document.querySelector('#autor')

horastext.innerText = "Agora são: " + horas + " Horas"
document.body.style.transition = '1s'

if (horas >= 0 && horas < 5 || horas >= 18 && horas <= 24) {
    document.body.style.backgroundColor = '#1E1E24'
    document.body.style.color = '#fff'
    image.src = 'img/noite.jpg'
    autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/thomaschung-17126556/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5323170">토마스 정</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5323170">Pixabay'

} else if (horas >= 5 && horas < 12) {
    document.body.style.backgroundColor = '#B3DEC1'
    document.body.style.color = 'black'
    image.src = 'img/manha.jpg'
    autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/shogun-1310047/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5168551">Karl Egger</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5168551">Pixabay'

} else {
    document.body.style.backgroundColor = '#F3B61F'
    document.body.style.color = 'black'
    image.src = 'img/tarde.jpg'
    autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/nordseher-6327161/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6483278">Ingo Jakubke</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6483278">Pixabay'
}
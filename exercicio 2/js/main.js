let btn = document.getElementById('verificar')
let ano = new Date().getFullYear()
let anoNasc = document.getElementById('anoNasc')
let detect = document.getElementById('detect')
let imagem = document.getElementById('imagem')
let autor = document.getElementById('autor')

btn.onclick = () => {
    let idade = Number(ano) - Number(anoNasc.value)
    let sexo = document.getElementsByName('sexo')

    if (anoNasc.value.length != 4 || sexo[0].checked == false && sexo[1].checked == false) {
        alert('Preencha todos os campos corretamente')
        return
    } else if (idade < 0 || idade > 100) {
        alert('Ano de nascimento inválido')
        return
    }
    else {
        document.body.style.transition = '1s'
        if (sexo[0].checked) {
            if (idade < 14) {
                detect.innerText = `Detectamos um menino de ${idade} anos.`
                imagem.src = 'img/menino.jpg'
                autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/vika_glitter-6314823/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2923682">Victoria</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2923682">Pixabay</a>'

            } else if (idade >= 14 && idade < 19) {
                detect.innerText = `Detectamos uma adolescente de ${idade} anos.`
                imagem.src = 'img/h-adolescente.jpg'
                autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/alexandra_koch-621802/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7010908">Alexandra_Koch</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7010908">Pixabay</a>'

            } else if (idade >= 19 && idade < 60) {
                detect.innerText = `Detectamos um homem adulto de ${idade} anos.`
                imagem.src = 'img/h-adulto.jpg'
                autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/elsimage-14025988/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4568761">Dellon Thomas</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4568761">Pixabay</a>'

            } else {
                detect.innerText = `Detectamos um homem idoso de ${idade} anos.`
                imagem.src = 'img/h-idoso.jpg'
                autor.innerHTML = 'Foto de Thato Moiketsi: <a href="https://www.pexels.com/pt-br/foto/unidade-32525271/">Pexels</a>'
            }
        } else {
            if (idade < 14) {
                detect.innerText = `Detectamos uma menina de ${idade} anos.`
                imagem.src = 'img/menina.jpg'
                autor.innerHTML = 'Imagem de <a href="https://pixabay.com/pt/users/lollipopphotographyuk-17043382/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5299081">Julie Rose</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5299081">Pixabay</a>'

            } else if (idade >= 14 && idade < 19) {
                detect.innerText = `Detectamos uma adolescente de ${idade} anos.`
                imagem.src = 'img/m-adolescente.jpg'
                autor.innerHTML = 'Foto de frank minjarez: <a href="https://www.pexels.com/pt-br/foto/moda-tendencia-pessoa-pessoas-18134145/">Pexels</a>'

            } else if (idade >= 19 && idade < 60) {
                detect.innerText = `Detectamos uma mulher adulta de ${idade} anos.`
                imagem.src = 'img/m-adulta.jpg'
                autor.innerHTML = 'Foto de M Zass: <a href="https://www.pexels.com/pt-br/foto/33621025/">Pexels</a>'

            } else {
                detect.innerText = `Detectamos uma mulher idosa de ${idade} anos.`
                imagem.src = 'img/m-idosa.jpg'
                autor.innerHTML = 'Foto de Askar Abayev: <a href="https://www.pexels.com/pt-br/foto/mulher-idosa-em-pe-no-jardim-5638645/">Pexels</a>'
            }
        }

    }
}
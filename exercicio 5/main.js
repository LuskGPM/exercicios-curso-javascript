let btnadd = document.querySelector('#buttonadd')
let btnfinal = document.querySelector('#buttonfinal')
let num = document.querySelector('#num')
let lista = []
let flista = document.querySelector('#flista')

btnadd.onclick = () => {
    if (verificarCampo(num, lista) == false) {
        return
    } else {
        deleteP()
        lista.push(Number(num.value))
        num.value = ''
        num.focus()
        flista.innerHTML = ''
        for (let i in lista) {
            flista.innerHTML += `Adicionado número: ${lista[i]} <br>`
        }
    }
}

btnfinal.onclick = () => {
    if (lista.length == 0) {
        alert('Adicione alguns números')
    } else {
        let p = document.createElement('p')
        p.setAttribute('class', 'cdados')
        p.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
        let maior = verificarMaior(lista)
        let menor = verificarMenor(lista)
        let soma = somaTodos(lista)
        let media = mediaTodos(soma, lista)
        p.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
        p.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
        p.innerHTML += `<p>A soma dos números cadastrados foi ${soma}</p>`
        p.innerHTML += `<p>A media dos números cadastrados foi ${media}</p>`
        document.querySelector('#campoDados').appendChild(p)
    }
}

function verificarCampo(campo, lista) {
    if (campo.value.length == 0) {
        alert('Digite um número')
        return false
    } else if (campo.value > 100 || campo.value < 1) {
        alert('Digite um número entre 1 e 100')
        return false
    } else if (lista.includes(Number(campo.value))) {
        alert('Este número ja foi adicionado')
        return false
    } else {
        return true
    }
}

function verificarMaior(lista) {
    let maior = lista[0]
    for (let i in lista) {
        if (lista[i] > maior){
            maior = lista[i]
        }
    }
    return maior
}

function verificarMenor(lista) {
    let menor = lista[0]
    for (let i in lista) {
        if (lista[i] < menor){
            menor = lista[i]
        }
    }
    return menor
}

function somaTodos(lista) {
    let soma = 0
    for (let i in lista) {
        soma += lista[i]
    }
    return soma
}

function mediaTodos(soma, lista) {
    let tamanho = lista.length
    let media = soma / tamanho
    return media
}

function deleteP() {
    document.querySelector('#campoDados').innerHTML = ''
}
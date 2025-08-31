let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let btn = document.getElementById('button')
let contando = document.getElementById('contando')


btn.onclick = () => {
    contando.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i > 1000 || f.lenght > 1000 || p.lenght > 1000) {
        alert('Valores muito grandes')
        return
    } else if (i < f) {
        for (let c = i; c <= f; c+=p) {
            contando.innerHTML += ` ${c} \u{1F449}`
        }
        contando.innerHTML += `\u{1F3C1}`
    } else {
        for (let c = i; c >= f; c-=p) {
            contando.innerHTML += ` ${c} \u{1F449}`
        }
        contando.innerHTML += `\u{1F3C1}`
    }
}
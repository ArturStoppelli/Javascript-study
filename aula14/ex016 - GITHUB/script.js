function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F645}`
    }
    }

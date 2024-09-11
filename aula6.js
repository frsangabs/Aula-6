function mostrarTabela(){
    let obj = {numeros:[1, 3, 7, 9, -1, 0, 4]
    }

    let sum = 0
    let divcorpo = document.createElement('div')
    let divnums = document.createElement('div')
    let divqt = document.createElement('div')
    let divsum = document.createElement('div')

    divnums.innerHTML = 'Números: '
    divqt.innerHTML = 'Quantidade de elementos: '
    divsum.innerHTML = 'Soma total dos elementos: '


    for(let i=0; i<obj.numeros.length; i++){
        let objnums = document.createElement('div')
        objnums.innerHTML = obj.numeros[i]
        divnums.appendChild(objnums)
        sum += obj.numeros[i]
    }
    divqt.innerHTML += obj.numeros.length
    divsum.innerHTML += sum

    divcorpo.appendChild(divnums)
    document.body.appendChild(divcorpo)
    document.body.appendChild(divqt)
    document.body.appendChild(divsum)
}

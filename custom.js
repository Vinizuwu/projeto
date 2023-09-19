function mudeModo() {
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src' , './assets/icon.png')
        html.classList.remove('light')
    } else {
        img.setAttribute("src" , "./assets/deku1.png")
        html.classList.add('light')
    }
    
    
}
    // cria uma conste e uma função que foi setada no html primeiramente
    // "documente" representa o documento em formato de objeto JS e o Ponto é usado para usar as funcionalidades 

    // html na lista de classe tem o light
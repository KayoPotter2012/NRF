let QTD_pessoas = document.getElementById('QTD_pessoas')
let ocasião = document.getElementById('ocasião')
let orçamento = document.getElementById('orçamento')
let menores = document.getElementById('menores')

let sugestao = document.getElementById('sugestao')
let chat = document.getElementById('chat')
let popup = document.getElementById('popup')

let botaoSugestao = document.getElementById('botaoSugestao')
let botaoChat = document.getElementById('botaoChat')
let botaoPopup = document.querySelector('header button')

let chatPrompt = document.getElementById('chatPrompt')
let imgSobremesa = document.querySelector('#sugestao_produto_sobremesa img')
let nomeSobremesa = document.querySelector('#sugestao_produto_sobremesa div p')
let preçoSobremesa = document.querySelector('#sugestao_produto_sobremesa div div p')
let bebidaProduto = document.getElementById('sugestao_produto_bebida')

let imgPratoPrincipal = document.querySelector('#sugestao_produto_prato-principal img')
let nomePratoPrincipal = document.querySelector('#sugestao_produto_prato-principal div p')
let preçoPratoPrincipal = document.querySelector('#sugestao_produto_prato-principal div div p')

let contador = 1
let contadorPopup = 1

QTD_pessoas.value = 10
ocasião.value = 'churrasco'
orçamento.value = 800.00
menores.value = 4

botaoSugestao.addEventListener('click', () => {
    sugestao.style.display = 'flex'
    chat.style.display = 'flex'
    chatPrompt.value = 'Olá, sou chocolatra, se puder coloque algum produto relacionado a chocolate'
})

botaoChat.addEventListener('click', () => {
    if (contador == 1){
        chatPrompt.value = 'Quero uma picanha invés de capa de filé'
        imgSobremesa.src = './img/Sobremesa_gran-grateau.png'
        nomeSobremesa.innerHTML = 'Gran Gateau Swift 450g'
        preçoSobremesa.innerHTML = 'R$ 39,90/Un.'

        contador = 2
        
    } else if (contador == 2){
        chatPrompt.value = 'Pode me recomendar uma bebida'
        imgPratoPrincipal.src = './img/Prato-principal_Picanha.png'
        nomePratoPrincipal.innerHTML = 'Picanha Linha Mais de 1,1Kg a 1,6Kg'
        preçoPratoPrincipal.innerHTML = 'R$ 65,90/Un.'

        contador = 3
    } else if (contador == 3){
        chatPrompt.value = ''
        bebidaProduto.style.display = 'flex'
    }
})

botaoPopup.addEventListener('click', () => {
    if(contadorPopup == 1){
        popup.style.display = 'flex'
        contadorPopup = contadorPopup + 1
    } else if (contadorPopup == 2){
        popup.style.display = 'none'
        contadorPopup = contadorPopup - 1
    }
})

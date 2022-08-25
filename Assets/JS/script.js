/*
Case sensitve = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id:getElementByID()
Por Nome:getElementByName()
por Classe:getElementsByClassName()
por Seletor: querySelector() */

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto =  document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '30%'
email.style.width = '30%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = "Nome inválido"
        txt.style.color = 'red'
    }else{
        txt.innerHTML = "Nome Válido"
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML =  'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML =  'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >=  100){
        txtAssunto.innerHTML = "No máximo 100 caracteres"
        txtAssunto.style.color = 'red'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Formulário Inválido')
    }
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}
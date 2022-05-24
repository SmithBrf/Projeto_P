console.log("Vai começar a PUTARIAAAAAAAAAAAAAAAA")
let user=localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector("#entrar")
let sair=document.querySelector("#sair")

console.log(user.indexOf('@'))
console.log(user.substring(0,user.indexOf('@')))

let nomeUser=user.substring(0,user.indexOf('@'))

function mgsUser(){
    let nomeUser=user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='Olá, <b>' + nomeUser + '</b>'
    entrar.style.display="none"
}
function resetUser(){
    sair.style.display="none"
}
sair.onclick=function(){
    localStorage.removeItem("emailUser")
    location.href="index.html"
}
//Metodo simples de fazer aparece apenas o bem vindo sem sumir o entrar
//localStorage.emailUser ? bemVindo.innerHTML='Olá, ' + user:null

localStorage.emailUser ? mgsUser(): resetUser()
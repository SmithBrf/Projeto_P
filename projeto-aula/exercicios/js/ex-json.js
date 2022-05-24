//escopos var let const
let videos='{"tipo":"Site de assinatura","turma":"ImpulsoTec","ano":2022}'

console.log(videos)
let videosJSON= JSON.parse(videos)

console.log(videosJSON)

let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")

h3.innerHTML=videosJSON.tipo
p1.innerHTML="Turma: " + videosJSON.turma
p2.innerHTML=videosJSON.ano

// Exemplo 2
let usuario='{"nome":"Adalberto","idade":34,"livros":["Percy jackson","Os Herois do Olimpo","Os Segredos de apolo","Botafogo Futebol e Regatas"]}'
let usuarioJSON= JSON.parse(usuario)
console.log(usuarioJSON)
let infoNome=document.querySelector("#infoNome")
infoNome.innerHTML=usuarioJSON.nome +", "+ usuarioJSON.idade + " anos"

//Modo manual de se fazer
// let listaLivros=document.querySelector("#listaLivros")
// listaLivros.innerHTML='<li>' + usuarioJSON.livros[0] + "</li>"
// listaLivros.innerHTML+='<li>' + usuarioJSON.livros[1] + "</li>"
// listaLivros.innerHTML+='<li>' + usuarioJSON.livros[2] + "</li>"

//Modo "automatico de se fazer"
for(var i=0;i<usuarioJSON.livros.length;i++){
    console.log(usuarioJSON.livros[i])
    //Outro modo "automatico" 
    //listaLivros.innerHTML+='<li>' + usuarioJSON.livros[i] + "</li>"
    livrosFor.innerHTML+= (i+1) + ': ' + usuarioJSON.livros[i] + '<br />'
}
///////////////////////////////////////////////////////////////////////////////////////

let nomes=new Array("Francis","Fred","Albany")
let cores=["amarelo","branco","azul"]
let cargos=[
    ["Francis","Diretor",45,4],
    ["Fred","Scrum",25,2],
    ["Albany","PO",22,1]
]

let media= parseInt((cargos[0][2] + cargos[1][2] + cargos[2][2])/3)
document.querySelector("#media").innerHTML="A média das idades é " +media+ " anos."

var p=document.createElement('p')
p.innerHTML=cargos[0][0]+ ","+ cargos[0][1] + ", " + cargos[0][2]+ " anos"
document.querySelector("#cargos").appendChild(p)

console.log(media)
console.log(nomes[2])
console.log(cores[0])
console.log(cargos[0][0],cargos[0][1],cargos[0][2] + " anos")

//+++++++++++++++++++++++++++++++++++++++++++++
//Json

let pessoa='{"nome":"Fred","cargo":"Scrum","esportes":["natação","boxe"]}'
let pessoaJSON=JSON.parse(pessoa)
console.log(pessoaJSON.nome,pessoaJSON.esportes)

let total='230'
let totalFinal=parseInt(total)
console.log(typeof(totalFinal))

//Ex 1 - Gravação
localStorage.aula="Javascript"
//Ex 2 - Gravação
localStorage.setItem("Projeto","ImpulsoTec")


//Ex 1 - Recuperação localStorage
console.log(localStorage.Projeto)
//Ex 2 - Recuperação localStorage
console.log(localStorage.getItem("Projeto"))

localStorage.removeItem("Projeto")


//Array livros com três posições: 0=titulo 1=imagem 2=sinopse
var livros=[
    ["Mick","mick.jpg","Mick Jagger não exagera ao afirmar que se escrevesse sobre sua vida em todos os detalhes, as pessoas ficariam aterrorizadas. Nesta biografia do líder dos Rolling Stones, o jornalista americano Christopher Andersen não poupa fãs e leitores dos detalhes polêmicos e nada glamourosos da trajetória artística e pessoal de um dos astros mais originais do rock contemporâneo."],
    ["Quem somos nós","quem-somos-nos.jpg","De que são feitos o pensamento e a realidade? E como um pensamento muda a natureza da realidade? Este livro conduz por meio da ciência para dentro de um universo que é mais vivo do que se pode imaginar - a fronteira final do conhecimento científico sobre a consciência a percepção a química do corpo e a estrutura cerebral. Uma obra sobre física quântica espiritualidade e o significado da vida."],
    ["A cura quântica","cura-quantica.jpg","Há uma abordagem da medicina na qual a mente, a consciência e a inteligência ocupam papéis principais. Segundo essa vertente, as doenças ocorrem quando nosso corpo vital está ferido."],
    ["O pequeno Príncipe","pequeno-principe.jpg","Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952."]
]

//Galeria faz acesso ao elemento html div com id=galeria
var galeria=document.querySelector("#galeria")

//Lógica de iteração para consumo do array
for(var i=0;i<livros.length;i++){
    // var img= new Image()
    // img.src="../Imagens/" + livros[i][1]
    // img.width=150
            var div=document.createElement('div')
            div.classList.add('col-sm-6')
            div.classList.add('mt-3')
            var conteudo=document.createElement('div')
            conteudo.className='row'
    //insere o tag h3 como o titulo
    conteudo.innerHTML+='<h3 class="col-sm-12">' + livros[i][0] + '</h3>'
    //insere a imagem com 100 dentro de uma div espaço 3
    conteudo.innerHTML+='<div class="col-sm-3"><img src="../Imagens/' + livros[i][1] + '" class="w-100" /></div>'
    //insere o paragrafo com a resenha dentro de uma div espaço 9
    conteudo.innerHTML+='<div class="col-sm-9"><p>' + livros[i][2] +'</p></div>'
            div.appendChild(conteudo)
            galeria.appendChild(div)





    // galeria.innerHTML+="<p>" + livros[i][0] + "</p>"
    // galeria.appendChild(img)
    // galeria.innerHTML+="<p>" + livros[i][2] + "</p>"
}
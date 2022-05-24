console.log("Hello world!")

let lista = {
    nome:'Lista de Tarefas',
    imprimeTitulo:function(el,titulo){
        el.innerHTML=titulo
    },
    estiloLista:function(el,corDaBorda){
        el.style.borderWidth='1px'
        el.style.borderStyle='solid'
        el.style.borderColor=corDaBorda
    },
    gravarLista:function(el,key){
        localStorage.setItem(key,el.innerHTML)
    },
    imprimeLista:function(el,lista){
        el.innerHTML=lista
    }
}
//imprime nome da lista em tela
lista.imprimeTitulo(document.querySelector('#lista1 h2'),'Lista de Compras')
lista.imprimeTitulo(document.querySelector('#lista2 h2'),'Lista de Viagens')

//altera a cor da borda da lista
lista.estiloLista(document.querySelector('#tarefas_l1'),'purple')
lista.estiloLista(document.querySelector('#tarefas_l2'),'yellow')

//gravar em localStorage
document.querySelector('#bt_l1').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l1'),"lista_l1")
} 
document.querySelector('#bt_l2').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l2'),"lista_l2")
} 

//imprimir em tela a lista
if(localStorage.lista_l1){
    lista.imprimeLista(document.querySelector("#tarefas_l1"),localStorage.getItem('lista_l1'))
}
    var formL=document.forms.formLogin
    //Evento de clique no botão confirmar
    document.querySelector("#btLogin").onclick=function(){
        if(formL.email.value ==""){
            alert("Preencha o nome")
        }else if (formL.senha.value == ""){
            alert("Preencha o email")
        }else{
            formL.submit()
            localStorage.emailUser=formL.email.value
        }
    }
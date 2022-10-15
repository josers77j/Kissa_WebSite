function valida_envia(){
        var x=document.fvalida.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
    //valido el nombre
    if (document.fvalida.email.value.length==0){
           alert("Es necesario un Email")
           document.fvalida.email.focus()
           return 0;
    }else{
        
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Introduzca un Email valido");  
        return 0;  
         }      
    }
    
    //valido el interés
    if (document.fvalida.message.value==0){
           alert("Necesitamos saber su mensaje")
           document.fvalida.interes.focus()
           return 0;
    }
    //el formulario se envia
    alert("Muchas gracias por su mensaje \n Lo contactaremos lo mas rapido posible ");
    document.fvalida.submit();
}	
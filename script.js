function calcular(){

    var principal = document.getElementById("limite").value;
    var num1=1;
    var num2=0;
    var num3; 
    var arreglo= [];
   // var numCalculo = prompt("Ingresar la posicion que se busca");
    
     /* this condition allow validate the ingress amount*/ 
    if( principal < 1 )
    {
    alert("el limite debe ser un numero positivo");
    document.getElementById("principal").focus();
    return
    }

    if (principal > 0){
    for(var i = 0 ; i < principal; i++)
    {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        arreglo [i] = num3; 
        }
    }
    else  {
        document.write(num2);
    }


    result = document.getElementById("result")
    result.innerHTML = "La sucesion es : " + arreglo.join(","); 
    
}




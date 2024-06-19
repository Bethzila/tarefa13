function media() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3 )/3 ;
    document.getElementById('resultado').innerHTML="A média dos números é  " + media.toFixed(2);}

    function menor(){
        var idade = parseFloat(document.getElementById("idade").value);
        var menor=(idade);

        if(menor >=18) 
            alert("Você é maior de idade: "+ menor + "  anos ")
            else
            alert("Você é menor de idade:  "+ menor + "  anos ")
    }

function calendario(){
    var mes = parseFloat(document.getElementById("mes").value);
    var calendario=(mes);

    switch(calendario){
        case 1:
            document.getElementById('resultado3').innerHTML= " Este mês é Janeiro. " ;
            break;
            case 2:
                document.getElementById('resultado3').innerHTML= " Este mês é Fevereiro. " ;
                break;
            
            case 3:
                document.getElementById('resultado3').innerHTML= " Este mês é Março. " ;
                break;
            break;
            case 4:
                document.getElementById('resultado3').innerHTML= " Este mês é Abril. " ;
                break;
            
            case 5:
                document.getElementById('resultado3').innerHTML= " Este mês é Maio. " ;
                break;
            
            case 6:
                document.getElementById('resultado3').innerHTML= " Este mês é Junho. " ;
                break;
            break;
            case 7:
                document.getElementById('resultado3').innerHTML= " Este mês é Julho. " ;
                break;
            
            case 8:
                document.getElementById('resultado3').innerHTML= " Este mês é Agosto. " ;
                break;
            
            case 9:
                document.getElementById('resultado3').innerHTML= " Este mês é Setembro. " ;
                break;
            
            case 10:
                document.getElementById('resultado3').innerHTML= " Este mês é Outubro. " ;
                break;
            
            case 11:
                document.getElementById('resultado3').innerHTML= " Este mês é Novembro. " ;
                break;
            
            case 12:
                document.getElementById('resultado3').innerHTML= " Este mês é Dezembro. " ;
                break;
            
            default:
                document.getElementById('resultado3').innerHTML= " Valor inválido para mês. Digite um valor entre 1 e 12. "
    }
    
}
// Habilita e desabilita o input number da precisão
function checkbox()
{   
    if(document.getElementById('check').checked)
    {
        document.getElementById('prec').disabled = false;

    } else 
    {
		document.getElementById('prec').disabled = true;
	}
    
}

//Desabilita as opções anteriores após "Gerar"
function change()
{
    document.getElementById("b2").style.display = "block";
    document.getElementById("range").disabled = true;
    document.getElementById("x0").disabled = true;
    document.getElementById("x1").disabled = true;
    document.getElementById("fx").disabled = true;
    document.getElementById("prec").disabled = true;
    document.getElementById("check").disabled = true;

}

function inserirLinhaTabela() 
{

    //Cálculo numérico: 

    var poli = document.getElementById("fx").value;
	var troca = 
	{
	    sen: "Math.sin",
	    cos: "Math.cos",
	    e: "Math.E",
	    ln: "Math.log",   
	}


	poli = poli.replace(/sen|cos|e|ln/gi, function(matched){
	  return troca[matched];
    });
    
	function fdex(x)
	{
	    return eval(poli);
    }
    

    var x0 = parseFloat(document.getElementById("x0").value);
	var x1 = parseFloat(document.getElementById("x1").value);
    var itmax = parseFloat(document.getElementById("range").value);
    
	// var p = parseFloat(prompt("Insira a precisão"));
	


	var it, x, er,xOld1,xOld0;

	it = 0;
	er = 1;
    xOld1 = x0;
    x = x1;
	
    // Informações da tabela:    
                     
    var n = document.getElementById("range").value;
    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("minhaTabela");
    // Captura a quantidade de linhas já existentes na tabela
    var numOfRows = table.rows.length;
    // Captura a quantidade de colunas da última linha da tabela
    var numOfCols = table.rows[numOfRows-1].cells.length;


    // Implementação do checkbox + precisão no código fonte
    if(document.getElementById('prec').disabled == false)
    {
        var loop = "er > 10**(-p) && it < itmax";
        var p = document.getElementById("prec").value; 

    }
    if(document.getElementById('prec').disabled == true)
    {
        var loop = "it < itmax";
    }
    
        while(eval(loop))
		{
			xOld0 = xOld1;
        	xOld1 = x;
        	x = xOld1 - (fdex(xOld1)*(xOld1 - xOld0))/(fdex(xOld1) - fdex(xOld0));

            er = Math.abs((x - xOld1)/x);

            it = it + 1;

                for(var i = 0; i < n; i++)
                {
                var newRow = table.insertRow(numOfRows);
                numOfRows++;
                } 
                 
                 for (var j = 0; j < numOfCols; j++) {
                    // Insere uma coluna na nova linha 
                    newCell = newRow.insertCell(j);
                    // Insere um conteúdo na coluna
                if(j == 0)
                {
                    newCell.innerHTML = it; 
                }
                if(j == 1)
                {
                    newCell.innerHTML = x;  
                }
                if(j == 2)
                {
                    newCell.innerHTML = er; 
                }
                if(j == 3)
                {
                    newCell.innerHTML = fdex(x); 
                } 
        }
           
}

    }



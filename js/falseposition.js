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


function change()
{
    document.getElementById("b2").style.display = "block";
    document.getElementById("range").disabled = true;
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
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

	var a = parseFloat(document.getElementById("a").value);
	var b = parseFloat(document.getElementById("b").value);
    var itmax = parseFloat(document.getElementById("range").value);
    
	// var p = parseFloat(prompt("Insira a precisão"));
	


	var it, x, er, xOld;

	it = 0;
	x = a;
	er = 1;

	
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
			it = it + 1;
        	xOld = x;
        	x = a - (fdex(a)*(b-a))/(fdex(b) - fdex(a));

        		if (((fdex(x))*(fdex(a))) < 0)
        		{
            		b = x;
        		}
        		else
        		{
            		a = x;
        		}
                 er = Math.abs((x - xOld)/x);

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



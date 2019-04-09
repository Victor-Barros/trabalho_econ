function valor_Futuro(taxa, periodos, valorAtual){
    return Math.pow(1+(taxa), periodos)*valorAtual;
}
function valor_Presente(taxa, periodos, valorFuturo){
    return valorFuturo/Math.pow(1+(taxa), periodos);
}
function taxa_(valorFuturo, valorPresente, tempo){
    return (Math.pow(valorFuturo/valorPresente, tempo)-1)*100;
}
function valor_Uniforme(valorFuturo, taxa, tempo){
    return valorFuturo/((1+taxa)*((Math.pow(1+taxa, tempo)-1)/taxa));
}
function periodo_Montante(valorPresente, taxa, valorFuturo){
    return Math.log((valorFuturo/valorPresente))/Math.log(1+taxa);
}

function calcular() {
	var tipo_de_calculo = $("input[name=q5_tipoDe]:checked").data().calcvalue;
	var taxa = parseFloat($("#input_4").val())/100;
    var valorFuturo = parseFloat($("#input_7").val());
    var valorPresente = parseFloat($("#input_6").val());
	var tempo = parseFloat($("#input_3").val());
	
	if (tipo_de_calculo == 1) {	
        tempo = periodo_Montante(valorPresente, taxa, valorFuturo);
        $("#input_3").val(tempo.toFixed(4));
	}
	else if (tipo_de_calculo == 2) {
        valorUniforme = valor_Uniforme(valorFuturo, taxa, tempo);
        alert("Valor uniforme calculado: "+valorUniforme.toFixed(2));
	}
	else if (tipo_de_calculo == 3) {
        valorPresente = valor_Presente(taxa, tempo, valorFuturo);
        $("#input_6").val(valorPresente.toFixed(2));
	}
	else if (tipo_de_calculo == 4) {
        valorFuturo = valor_Futuro(taxa, tempo, valorPresente);
        $("#input_7").val(valorFuturo.toFixed(2));
	}
	return;
}

function setFormRequiredInputs() {
    var selected = $("input[name=q5_tipoDe]:checked").data().calcvalue;
    $("#input_3").attr("required","required"); //tempo
    $("#input_4").attr("required","required"); //taxa
    $("#input_6").attr("required","required"); //VP
    $("#input_7").attr("required","required"); //VF
    
    if (selected == 1) {
        $("#input_3").removeAttr("required"); //tempo
        $("#input_3").val("");
    }else if (selected == 2) {
        $("#input_6").removeAttr("required"); //VP
    }else if (selected == 3) {
        $("#input_6").removeAttr("required"); //VP
        $("#input_6").val("");
    }else if (selected == 4){
        $("#input_7").removeAttr("required"); //VF
        $("#input_7").val("");
    }
    return;
}
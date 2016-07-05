function marcarAlternativa(texto){
	var resp = texto.split(" ");
	if(resp.length > 1){
		for(item in resp){
			if(resp[item] == "RESPONDER")
				$( ".btn-responder" ).trigger( "touchstart" );
		}
	}

	var alternativasNumericasEscritas = ["UM","DOIS","TRÊS","QUATRO"];

	var alternativas = ['A','B','C','D'];
	var alternativasNumericas = ["1","2","3","4"];

	var alternativa = texto.split(" ");
	if(alternativa.length > 1){
		for(item in alternativa){
			if(alternativasNumericasEscritas.indexOf(alternativa[item]) != -1){
				alternativa = alternativasNumericasEscritas.indexOf(alternativa[item]);
				continue;
			}
			if(alternativa[item].length == 1){
				alternativa = alternativa[item];
			}
		}
	}else{
		alternativa = alternativa[0];
	}
	if(alternativas.indexOf(alternativa) != -1){
		var posicao = alternativas.indexOf(alternativa) + 1;
		if(verificaAlternativaExiste(posicao)){
			checkResposta(posicao-1);
		}
	}else if(alternativasNumericas.indexOf(alternativa) != -1){
		var posicao = alternativasNumericas.indexOf(alternativa) + 1;
		if(verificaAlternativaExiste(posicao)){
			checkResposta(posicao);
		}
	}

}

function checkResposta(posicao){
	var tipoPergunta = $("#tipoPergunta").val();
	removerAlternativasChecadas();
	$("li.alternativa:eq("+posicao+") span").addClass("checked");
	var id = $("li.alternativa:eq("+posicao+")").attr("id");

	$(".conteudo-pergunta #" + id + " .checkbox span").addClass("checked");
	$(".btn-responder").removeClass("inativo");
	$(".btn-responder").removeAttr("disabled");

	$('.btn-responder').text('Responder');
	$('.btn-responder').removeClass('errada');

	respostaEscolhida = id.replace("alt-", "");

	opcaoSelecionada = respostaEscolhida;
}

function verificaAlternativaExiste(numero){
	if(document.getElementById('alt-'+numero)){
		return true;
	}else{
		return false;
	}
}

function removerAlternativasChecadas(){
	$("a.checkbox span").removeAttr("class");
}
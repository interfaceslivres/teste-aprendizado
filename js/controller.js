$(document).ready(function() {			
//Bloquear radios

// AMIGO HAROLDO, fiz a função assim: 

$('input[type="radio"]').on( "click", function() {
	var linha = event.target.id;
	console.log(linha);
	if (linha == "p1r1") {
		$('.linha1:checked').not(this).attr('checked', false);
	}
	if (linha == "p1r2") {
		$('.linha2:checked').not(this).attr('checked', false);
	}
	if (linha == "p1r3") {
		$('.linha3:checked').not(this).attr('checked', false);
	}
	if (linha == "p1r4") {
		$('.linha4:checked').not(this).attr('checked', false);
	}
});

// mas perceba que é possivel você usar como classe as colunas 
// e não as linhas, para que desse modo, você nao precise alterar 
// o estilo visual da página.
// não sei se foi melhor fazer o reuso, estou achando que existem muitas 
// divs desnecessárias. veja se consegue uma limpeza. o/




 var frases = ["Que a força esteja com você!", "Pense como um próton e mantenha-se positivo.", "Você só falha quando para de tentar."];

  function incentivo(){
    var i = parseInt(Math.random()*3);
    return frases[i];
    }
 
 document.getElementById("motivacional").innerHTML = incentivo() ;


		$("#info").click(function() {	
					$('#modal-container-info').modal({
      					show: true
    				});
		});


$("#formulario").submit(function(e){
					    e.preventDefault()
					})



// TROCAR , POR .	
	$(".input-group input").blur(function () {
		$(this).val($(this).val().replace(/,/g,'.'));
	});
	
// VALIDATE 
	$("#formulario").validate({
					  rules: {
							nota1: {
								required: true,
								number: true,
								min: 0,
								max: 10				
							},
							nota2: {
								required: true,
								number: true,
								min: 0,
								max: 10				
							},
							nota3: {
								required: true,
								number: true,
								min: 0,
								max: 10				
							},
							nota4: {
								required: true,
								number: true,
								min: 0,
								max: 10				
							},
							nota5: {
								required: true,
								number: true,
								min: 0,
								max: 10				
							},
							nota6: {
								required: true,
								number: true,
								min: 0,
								max: 10
							},
							nota7: {
								required: true,
								number: true,
								min: 0,
								max: 10
							},
							nota8: {
								required: true,
								number: true,
								min: 0,
								max: 10
							},
							nota9: {
								required: true,
								number: true,
								min: 0,
								max: 10
							},
						 },
						messages: {
							nota1: {
								required: "É preciso informar a 1ª nota.",
								min: "Ninguém pode tirar uma 1ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 1ª nota.",
								number: "A 1ª nota precisa ser um número."
							},		
							nota2: {
								required: "É preciso informar a 2ª nota.",
								min: "Ninguém pode tirar uma 2ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 2ª nota.",
								number: "A 2ª nota precisa ser um número."
							},		
							nota3: {
								required: "É preciso informar a 3ª nota.",
								min: "Ninguém pode tirar uma 3ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 3ª nota.",
								number: "A 3ª nota precisa ser um número."
							},		
							nota4: {
								required: "É preciso informar a 4ª nota.",
								min: "Ninguém pode tirar uma 4ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 4ª nota.",
								number: "A 4ª nota precisa ser um número."
							},		
							nota5: {
								required: "É preciso informar a 5ª nota.",
								min: "Ninguém pode tirar uma 5ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 5ª nota.",
								number: "A 5ª nota precisa ser um número."
							},		
							nota6: {
								required: "É preciso informar a 6ª nota.",
								min: "Ninguém pode tirar uma 6ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 6ª nota.",
								number: "A 6ª nota precisa ser um número."
							},		
							nota7: {
								required: "É preciso informar a 7ª nota.",
								min: "Ninguém pode tirar uma 7ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 7ª nota.",
								number: "A 7ª nota precisa ser um número."
							},		
							nota8: {
								required: "É preciso informar a 8ª nota.",
								min: "Ninguém pode tirar uma 8ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 8ª nota.",
								number: "A 8ª nota precisa ser um número."
							},		
							nota9: {
								required: "É preciso informar a 9ª nota.",
								min: "Ninguém pode tirar uma 9ª nota tão baixa.",
								max: "Insira um valor entre 0 e 10 na 9ª nota.",
								number: "A 9ª nota precisa ser um número."
							},	
						},
					    errorLabelContainer: '#erro',
					    onfocusout: false,
					    onkeyup: false,
					    onclick: false,
					    wrapper: "li"



				});  


// CALCULAR MADIA



				function calcularMeida (){

					var elem = document.getElementsByClassName("notas");
					var names = [];
						for (var a = 0; a < elem.length; ++a) {
      						names.push(elem[a].value);
						}
					

					var soma = 0;
					var media = 0;
					var provafinal = 0;
						for (var b = 0; b < elem.length ; b++) {
        					media = (((soma += parseFloat(names[b])) / elem.length).toFixed(2));
   						 }

   					if (media >= 7) {
   						document.getElementById("resultado").innerHTML = "Sua média é " + media;
   						document.getElementById("resultado-final").innerHTML = " Parabéns, você foi aprovado!";
					};
					if ((media < 7) && (media >= 4)) {

						provafinal = (((5 - (.6 * media)) / .4).toFixed(2));

							document.getElementById("resultado").innerHTML = "Sua média é " + media;
							document.getElementById("resultado-final").innerHTML = " Você precisa tirar " + provafinal + " no exame final!";
					};
					if (media < 4) {



							document.getElementById("resultado").innerHTML = "Sua média é " + media;
							document.getElementById("resultado-final").innerHTML = " Seu estilo de aprendizado é ACOMODADOR.";
					};

					

				}
				  
// RESULTADO
		$("#botao").click(function() {	
			
			$('#formulario').valid();
			
			if ( $('#formulario').valid() ) {
					
					
					calcularMeida();
					

					$('#modal-container-resultado').modal({
      					show: true
    				});

    				

					}
				
			else {


				 $('#formulario').validate().resetForm();
				};
			
		});

		$('#modal-container-resultado').on('hidden.bs.modal', function () {
        	var form = $("#formulario"); 
    		form.validate().resetForm();      // clear out the validation errors
    		form[0].reset();
		});
    
// CLICK ADICIONAR NOTA
		$("#mais").click(function() {
			if (i != 9) {
			adicionarNota();	
			console.log(i);
			}
			else {
			$("#erro").html("<li><label style='display: inline;' class='error'>Você atingiu o limite de notas.</label></li>");
			setTimeout(function(){ $("#erro li").remove(); }, 1200);
			};
		});
		
// CLICK REMOVER NOTA
		$("#menos").click(function() {
			if (i != 1) {
			removerNota();		
			console.log(i);
			}
			else {
			$("#erro").html("<li><label style='display: inline;' class='error'>Não pode remover tudo.</label></li>");
			setTimeout(function(){ $("#erro li").remove(); }, 1200);
			};
		});
			
var i = 3;
    
// ADICIONAR NOTA
function adicionarNota(){
		i++;	
		$("#campos").append("<div class='input-group col-xs-12 col-lg-3 col-md-3 col-sm-3 pull-left col-lg-offset-1 col-md-offset-1 col-sm-offset-1'><span class='input-group-addon' id='sizing-addon"+ i +"'>" + i +"ª Nota</span><input type='text' id='nota" + i + "' name='nota" + i +"' class='notas form-control' placeholder='0 a 10' aria-describedby='sizing-addon"+i+"'></div>");
}

// REMOVER NOTA
function removerNota(){
	i--;
    $("#campos").children(".input-group:last").remove();
}
    
});



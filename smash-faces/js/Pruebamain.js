// change no se recarga la imagen otra vez pues no cambia el evento pero si fuera click se fuera recargado
// código Eli


$(document).ready(function(){

	$("#menu").change(function(){
		var opcion = $(this).val();
		sede = opcion;
		matrixsede(opcion);
	});


	$(".datos #search").click(function(){
		var names = $("input").val().toUpperCase();
		if(names == nameCoder){
			n+=5;
			$("p span").html(n);
			alert("Nombre correcto");
			matrixsede(sede);
		}else{
			n-=1;
			$("p span").html(n);
			alert("Nombre incorrecto");
			cont+=1;
			intentos();
		}
		$("input").val("");
	});


});

var cont=0; //variable global
var n=0; //variable global
var nameCoder ="" //variable global
var sede = 0 // variable global
var veces=0
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var aleatorio= 0;

function matrixsede(opcion){
	if(opcion=="1"){
		do{
			aleatorio=getRandomInt(0, mexico.length-1);

		}while(!(mexico[aleatorio].passed !=1) )
		ponerfoto(mexico, aleatorio);


			
		veces+=1;
		stockfotos(mexico)


	

	}else if(opcion=="2"){
		var seguirintentando = true;
		do{
			aleatorio=getRandomInt(0, peru.length-1);
			if(peru[aleatorio].passed != 1){
				seguirintentando = false;
			}
			// peru[aleatorio].passed == 1   (true) seguirintentando
			// peru[aleatorio].passed != 1   (false) seguirintentando
 		



 		}while(seguirintentando)
		// var aleatorio=getRandomInt(0, peru.length-1);
		ponerfoto(peru, aleatorio);
	


		veces+=1;
		stockfotos(peru);
		


	}
}

function ponerfoto(arreglo, index){
		var nombrepais = (arreglo === peru) ? "peru" : "mexico";	
		$(".imagenes").html("<img>");
		$("img").attr("src", "fotos/"+nombrepais+"/"+arreglo[index].image);
		arreglo[index].passed = 1;
		nameCoder = (arreglo[index].name).toUpperCase();
}

function intentos(){
	if(cont==5){
		alert("Termino los 5 intentos");
		matrixsede(sede);
		cont = 0;
	}
}

function stockfotos(pais){
	if(veces==pais.length-1){
		alert("No hay fotos para mostrar")
	}
}

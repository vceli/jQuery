// change no se recarga la imagen otra vez pues no cambia el evento pero si fuera click se fuera recargado
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
			$("p span").text(n);
			$("#alerta").text("Excelente acertaste") // alert("Nombre correcto");
			setTimeout(function(){ matrixsede(sede); $("#alerta").text(""); cont = 5 }, 2000);
			// matrixsede(sede);
		}else{
			n-=1;
			$("p span").text(n);
			// alert("Nombre incorrecto, sigue intentando. Te queda "+cont);
			// cont-=1; // disminuye las veces de intentos en 1
			intentos();
		}
		$("input").val("");
	});

});


var cont = 5; //variable global
var n = 0; //variable global
var nameCoder = ""; //variable global
var sede = 0; // variable global
var veces = 0;
var generados = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function matrixsede(opcion){

	if(opcion=="1"){
		// var aleatorio=getRandomInt(0, mexico.length-1);
		// ponerfoto(mexico, aleatorio);
		var aleatorio = generarAleatorio(mexico)
		if (aleatorio == -1) alert("No hay más fotos")
		else ponerfoto(mexico, aleatorio)	


	}else if(opcion=="2"){
		// var aleatorio=getRandomInt(0, peru.length-1);
		// ponerfoto(peru, aleatorio);
		var aleatorio = generarAleatorio(peru)
		if (aleatorio == -1) alert("No hay más fotos")
		else ponerfoto(peru, aleatorio)
	}
}

function ponerfoto(arreglo, index){
		var nombrepais = (arreglo === peru) ? "peru" : "mexico";	
		$(".imagenes").html("<img>");
		$("img").attr("src", "fotos/"+nombrepais+"/"+arreglo[index].image);
		// arreglo[index].passed = 1;
		nameCoder = (arreglo[index].name).toUpperCase();
}

function intentos(){

		if(cont>1 && cont<=5){
			alert("Nombre incorrecto, sigue intentando. Te queda "+(cont-1));
			cont-=1; // disminuye las veces de intentos en 1
		}else if(cont==1){
			alert("Termino los 5 intentos")
			matrixsede(sede);
			cont = 5;  // inicializa números de intentos
		}

}

function generarAleatorio(pais){
	
	var existe = true;
	
	do{
		var aleatorio =getRandomInt(0,pais.length-1);
		if (generados.length == pais.length) {
			aleatorio = -1
			existe = false	
		} else if(generados.length>0){
			var encontrado = generados.indexOf(aleatorio)
			if(encontrado < 0) existe = false;
		} else existe = false
		if(!existe && generados.length != pais.length){
			generados.push(aleatorio)
		} 
	}while(existe)
	
	return aleatorio

}
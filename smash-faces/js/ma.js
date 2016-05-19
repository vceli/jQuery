var generados = [];

function generarAleatorio(long){
	var existe = true;
	do{

		var aleatorio = Math.floor(Math.random()*long);
		if(generados.length > 0){
			var encontrado = generados.filter(function(numero){
				return numero == aleatorio
			})
			if(encontrado.length == 0) existe = false;
			else console.log("se repite "+aleatorio);

		}else existe = false
		if(!existe) generados.push(aleatorio)

	}while(existe)
	return aleatorio
}

for( var i=0 ;i< 8 ;i++){
	console.log(generarAleatorio(10))
}
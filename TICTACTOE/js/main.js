$(document).ready(function(){
	var cont=0
		$(".boton").click(function(){
		cont+=1
		if(cont%2){
				$(this).text("x");
				$(this).off("click");
					var resultado = validar("x");
					if (cont==9){
						if(resultado==false) {
							alert("perdio");
						}
					}
				}else{
					$(this).text("o");
					$(this).off("click")
					var resultado = validar("o");
					if (cont==9){
						if(resultado==false) {
							alert("perdio");
						}
					}	

				}
			
		});

function validar(valor){
	var btn1=$("#bt1").text()
    var btn2=$("#bt2").text()
    var btn3=$("#bt3").text()
    var btn4=$("#bt4").text()
    var btn5=$("#bt5").text()
    var btn6=$("#bt6").text()
    var btn7=$("#bt7").text()
    var btn8=$("#bt8").text()
    var btn9=$("#bt9").text()
    var ganador = true;
    if(btn1==btn2 && btn1==btn3 && btn1  == valor){
    	alert("gano")
    }else if(btn1==btn4 && btn1==btn7 && btn1 == valor){
    	alert("gano")
    }else if(btn1==btn5 && btn1==btn9 && btn1 == valor){
    	alert("gano")
    }else if(btn2==btn5 && btn2==btn8 && btn2 == valor){
    	alert("gano")
    }else if(btn3==btn6 && btn3==btn9 && btn3 == valor){
    	alert("gano")
    }else if(btn7==btn8 && btn7==btn9 && btn7 == valor){
    	alert("gano")
    }else if(btn3==btn5 && btn3==btn7 && btn3 == valor){
    	alert("gano")
    }else if(btn4==btn5 && btn4==btn6 && btn4 == valor){
    	alert("gano")
    }else{
    	ganador = false;
    }
    return ganador;
}
    
});


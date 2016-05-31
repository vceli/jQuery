/*  setTimeout es distinto a setInterval  */ 

var days = ["dom","lun","mar","mie","jue","vie","sab"]
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
var lugares = ["Chicago","Sau Paulo","Santiago","Mexico","Caracas","Brasilia","Quito","Guayaquil","Santa Marta","Bogota"] 
var hour = [0, 2, 2, 0, 1, 2, 0, 0 , 0, 0]                        


$(document).ready(function(){
	reloj()
	setInterval(function(){ reloj(); }, 1000);	
	
	$(".navegator .caja").on("click",function(){$(".ventanas").slideDown("slow")})
	$(".cerrar").on("click",function(){$(".ventanas").slideUp("slow")})

	// $("input").checked(function(){
	// 	console.log()
	// })
// var ciudad = $('#opt1').checked
// if( ciudad == true) {
//     alert("Seleccionado");
// }else{
// 	alert("no seleccionado")
// }
if($(".selecionado").prop('checked')){
	console.log("selecionado")

}



});


function reloj(){
	var d = new Date();
	$("#horaPeru").text(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
	$("#fecha").text(days[d.getDay()]+", "+d.getDate()+" de "+meses[d.getMonth()])

}
	// $(".cerrar").click(function(){
	// 	$(".ventanas").css("display","none");
	// });

	// $(".caja").click(function(){
	// 	$(".ventanas").css("display","block");
	// 	// $(".ventanas").shileDown("slow");
	// });


// media(max-with 780)


// media (max.)
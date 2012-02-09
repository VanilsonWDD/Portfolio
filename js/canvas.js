function desenharcirculosletra() {
	 var canvas = document.getElementById('circulo-habilidades');
     var context = canvas.getContext('2d');
	 context.fillStyle = "#0099FF";
     context.beginPath();
 	 context.arc(62, 61, 55, 0, Math.PI*2, false);//Coordenadas X, Coordenadas Y, Raio, Inicio do ângulo, Fim do ângulo , No sentido do relógio / Contra o sentido do relógio
     context.closePath();
     context.fill();//preenche o circulo
     // Adicionar texto
	 context.fillStyle = '#FFFFFF';
	 context.font = '17px Trebuchet MS';
	 context.fillText('Habilidades', 18, 67); 

	 var canvas = document.getElementById('circulo-servico');
     var context = canvas.getContext('2d');
	 context.fillStyle = "#0099FF";
     context.beginPath();
 	 context.arc(62, 61, 55, 0, Math.PI*2, false);//Coordenadas X, Coordenadas Y, Raio, Inicio do ângulo, Fim do ângulo , No sentido do relógio / Contra o sentido do relógio
     context.closePath();
     context.fill();//preenche o circulo
     // Adicionar texto
	 context.fillStyle = '#FFFFFF';
	 context.font = '17px Trebuchet MS';
	 context.fillText('Serviços', 30, 67); 
}
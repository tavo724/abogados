function validar(){
	
	var estadoTodoOK = true;

	if (document.getElementById("nombre").value.length<2) {
		estadoTodoOK = false;
	}
	if(document.getElementById("empresa").value.length<8){
		estadoTodoOK = false;
	}
	var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	if(!expresion.test(document.getElementById("email"))){
		estadoTodoOK = false;
	}
	if(document.getElementById("comentario").value.length<8){
		estadoTodoOK = false;
	}
	if (!estadoTodoOK) {
		alert("Algunos campos no están correctos, vuelva a revisarlos");
	}

	return estadoTodoOK;
}
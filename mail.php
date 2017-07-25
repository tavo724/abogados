<?php
	$para = "contactenos@serratonoriega.com";
	$nombre = $_POST["nombre"];
	$empresa = $_POST["empresa"];
	$comentario = $_POST["comentario"];
	$de = $_POST["email"];

	$Thank="http://serratonoriega.com/contactanos.html";

	$headers = "MINE-Version:1.0;\r\n";
	$headers .= "Content-type: text/html; \r\n charset=iso-8859-1; \r\n";
	$headers .= "From: $de \r\n";
	$headers .= "To:$para; \r\n Subject:$empresa \r\n";

	if(mail($para, $empresa, $comentario, $headers)){
		header("location: $Thank");
	}
	else{
		echo "error al envio";
	}
?>
//Enligando datos par cifrar
function mostrar(){

   let saveOf = Number(document.getElementById("offset").value);//Guardando valor de offset
   let text1 = document.getElementById("texto").value;//Guardando valor de texto
   let run = cipher.encode(saveOf, text1);//Juntando offset y test
   document.getElementById("cod").innerHTML = run;

}
   document.getElementById("Clave").addEventListener( "click", mostrar);

//Enligando datos para decifrar
function terminar(){

  let save = document.getElementById("offset").value;//Guardando valor de offset
  let text2 = document.getElementById("texto2").value;//Guardando valor de texto2
  let run2 = cipher.decode(save, text2);//Juntando offset y test
  document.getElementById("cod2").innerHTML = run2;

}
  document.getElementById("Clave").addEventListener( "click", terminar);

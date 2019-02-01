window.cipher = (){
  encode: function cifrar(desplazamiento, texto){
      let palabra= [];
      for(let i = 0; i<texto.length; i++){
      let caracter = texto[i];
      let ascii = caracter.charCodeAt(0);
      let codificar = (ascii -65+ desplazamiento)%26+65;
      let alfa = String.fromCharCode(codificar);
      palabra.push(alfa);
      }
      return palabra;

},

  decode : function decifrar(desplazamiento, texto){
      let palabra= [];
      for(let i = 0; i<texto.length; i++){
      let caracter = texto[i];
      let ascii = caracter.charCodeAt(0);
      let decodificar = (ascii +65- desplazamiento)%26+65;
      let alfa = String.fromCharCode(decodificar);
      palabra.push(alfa);
      }
      return palabra;
  }

},

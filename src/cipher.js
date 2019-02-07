window.cipher = {
  encode: function cifrar(offset, texto){
      let palabra= [];
      for(let i = 0; i<texto.length; i++){
        let caracter = texto[i];
        let ascii = caracter.charCodeAt(0);
        let codificar = (ascii -65+ offset)%26+65;
        let alfa = String.fromCharCode(codificar);
        palabra.push(alfa);
      }
      let palabra2 = palabra.join("");
      return palabra2;

},

  decode : function decifrar(offset, texto){
      let palabra= [];
      for(let i = 0; i<texto.length; i++){
      let caracter = texto[i];
      let ascii = caracter.charCodeAt(0);
      let decodificar = (ascii +65- offset)%26+65;
      let alfa = String.fromCharCode(decodificar);
      palabra.push(alfa);
      }
      let palabra3 = palabra.join("");
      return palabra3;
  }

};

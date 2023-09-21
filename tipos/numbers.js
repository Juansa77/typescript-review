"use strict";
(() => {
    //* instanciamos una variable tipo any
    let avengers;
    //* Ejemplo de TS para tipado que no compila bien: Al declararlo como número pero meterle un string, lo compila como número, no me dá error
    avengers = Number("55");
    const villians = 20;
    console.log(avengers);
    //* En este caso, como no hemos tipado avengers, siempre hará el else, ya que avengers es Undefined
    if (avengers < villians) {
        console.log("We are doomed");
    }
    else {
        console.log("We are saved");
    }
})();

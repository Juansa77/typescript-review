"use strict";
(() => {
    //* Aquí hacemos una variable custom con varios valores permitdos y un tipo
    let customVariable = "Juansa";
    customVariable = "Hola";
    //* imprimirá tipo string
    console.log(typeof customVariable);
    //* imprimirá tipo string
    customVariable = 10;
    console.log(typeof customVariable);
    //* 
    customVariable = {
        name: "Clark Kent",
        age: 60,
        powers: ["Speed", "Force", "Fly"],
    };
    //* imprimirá tipo object, ya que JS no tiene el equivalente a la definción de tipos
    console.log(typeof customVariable);
})();

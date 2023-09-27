"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "World is saved";
    //* Tipamos la varaible como tipo función
    let myFunction;
    //* Tipado de función con retorno impplícito: Hemos tipado una variable como una función que debe retornar un number
    let myFunction2;
    //* Asignamos addNumbers a myfunction y TS es capaz de inferir el tipo
    myFunction = addNumbers;
    //* Aquí lo infiere que es una suma de Numbers
    console.log(myFunction);
    console.log(myFunction(1, 2));
    //* Cambiamos la asignación
    myFunction = greet;
    //* Aquí infiere que retorna un string
    console.log(myFunction("Fernando"));
})();

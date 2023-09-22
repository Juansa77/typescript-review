"use strict";
(() => {
    let avenger = 123;
    let exits;
    let power;
    //* Casting o casteo: No transpila en JS.  cambiar el tipo de dato y que lo trate con otros métodos
    console.log(avenger.toUpperCase);
    avenger = "Captain America";
    //* Al instanciar un any no tenemos acceso a los métodos propios de valor 
    console.log(avenger);
})();

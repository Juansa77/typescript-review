"use strict";
(() => {
    //* TS infiere el tipo Boolean
    let hero = true;
    //* con Tipado
    let batmanIsHero = true;
    //* Añadiendo dos valores; imprimirá false ya que tienen que ser las dos true para que sea true 
    hero = true && false;
    console.log(hero, batmanIsHero);
    console.log("Hola mawi");
})();

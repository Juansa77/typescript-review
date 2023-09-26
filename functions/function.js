"use strict";
(() => {
    const hero = "Batman";
    //* En las funciones se tipa el tipo de valor esperado. El tipado en la función es el que decide el tipo de valor de retorno
    const returnName = () => {
        return hero;
    };
    console.log(typeof returnName);
})();

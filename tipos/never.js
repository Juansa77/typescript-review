"use strict";
(() => {
    //* Significa que la función no debe de terminar bien. PARA ERRORES
    const error = (message) => {
        throw new Error(message);
    };
    error("A la mierda");
    //* Este console.log no lo hará porque hemos ejectuado antes el never
    console.log("Hello world");
})();

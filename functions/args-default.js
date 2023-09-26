"use strict";
(() => {
    //* UN argumento obligatorio no puede ir después de un opcional. Para controlarlo, DALE UN VALOR POR DEFECTO AL PARÁMETRO OBLIGATORIO
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "----"} `.toUpperCase;
        }
        else {
            return `${firstName} ${lastName || "NO LAST NAME"}`;
        }
    };
    const fullName2 = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();

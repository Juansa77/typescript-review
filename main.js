"use strict";
var Validations;
(function (Validations) {
    Validations.validarTexto = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()) ? false : true);
    };
})(Validations || (Validations = {}));
console.log(Validations.validarTexto("Fernando"));
//# sourceMappingURL=main.js.map
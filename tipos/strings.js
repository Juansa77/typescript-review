"use strict";
(() => {
    var _a;
    const batman = "batman";
    const daredevil = `Daredevil`;
    //* Este OR se transpilará a JS con un OR y un ternario complejo
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || "no hay ese index");
})();

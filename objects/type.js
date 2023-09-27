"use strict";
(() => {
    //* Aquí tipamos a Flash directamente con un tipo, así que lo tenemos referenciado con el tipo Hero
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Speed", "Force", "Fly"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();

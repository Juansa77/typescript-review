"use strict";
(() => {
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
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 2597,
            zop: "hs98",
            city: "Sevilla"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Juansa",
        age: 30,
    };
})();
//# sourceMappingURL=main.js.map
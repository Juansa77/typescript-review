"use strict";
(() => {
    const msg = "Hello world";
    const loquesea = {
        name: "Juansa",
        age: "45"
    };
    const a = 10;
    let b = 10;
    let c;
    const sayHello = (message) => {
        console.log(message);
    };
    (() => {
        const d = "console log de función autoinvocada";
        console.log(d);
    })();
    console.log(msg, loquesea.age);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let heroes;
    (function (heroes) {
        heroes[heroes["acuaman"] = 0] = "acuaman";
        heroes[heroes["batman"] = 1] = "batman";
        heroes[heroes["flash"] = 5] = "flash";
        heroes[heroes["superman"] = 100] = "superman";
    })(heroes || (heroes = {}));
    const fuerzaFlash = heroes.flash;
    const fuerzaSuperman = heroes.superman;
    const fuerzaBatman = heroes.batman;
    const fuerzaAcuaman = heroes.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(mystique);
(() => {
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "NO LAST NAME"}`;
    };
    const fullName2 = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log(superman);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const fullName2 = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "World is saved";
    let myFunction;
    let myFunction2;
    myFunction = addNumbers;
    console.log(myFunction);
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Fernando"));
})();
(() => {
    const hero = "Batman";
    const returnName = () => {
        return hero;
    };
    console.log(typeof returnName);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"]
    };
    flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
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
    console.log(flash);
})();
(() => {
    let customVariable = "Juansa";
    customVariable = "Hola";
    console.log(typeof customVariable);
    customVariable = 10;
    console.log(typeof customVariable);
    customVariable = {
        name: "Clark Kent",
        age: 60,
        powers: ["Speed", "Force", "Fly"],
    };
    console.log(typeof customVariable);
})();
(() => {
    let avenger = 123;
    let exits;
    let power;
    console.log(avenger.toUpperCase);
    avenger = "Captain America";
    console.log(avenger);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 9, 10];
    const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 9, 10];
})();
(() => {
    let hero = true;
    let batmanIsHero = true;
    hero = true && false;
    console.log(hero, batmanIsHero);
    console.log("Hola mawi");
})();
(() => {
    let AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 0] = "min";
        AudioLevel2[AudioLevel2["medium"] = 1] = "medium";
        AudioLevel2[AudioLevel2["max"] = 2] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    let AudioLevel3;
    (function (AudioLevel3) {
        AudioLevel3[AudioLevel3["min"] = 2] = "min";
        AudioLevel3[AudioLevel3["medium"] = 4] = "medium";
        AudioLevel3[AudioLevel3["max"] = 6] = "max";
    })(AudioLevel3 || (AudioLevel3 = {}));
    let currentAudio;
    let audioLevel = 10;
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("A la mierda");
    console.log("Hello world");
})();
(() => {
    let nada = undefined;
    let isActive = undefined;
})();
(() => {
    let avengers;
    avengers = Number("55");
    const villians = 20;
    console.log(avengers);
    if (avengers < villians) {
        console.log("We are doomed");
    }
    else {
        console.log("We are saved");
    }
})();
(() => {
    var _a;
    const batman = "batman";
    const daredevil = `Daredevil`;
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || "no hay ese index");
})();
(() => {
    const hero = ["Dr Strange", 100];
})();
(() => {
    const callBatman = () => {
        return;
    };
})();
//# sourceMappingURL=main.js.map
"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
    }
    class Villians extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villians("Magneto", "Eric");
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name,
                this.team = team,
                this.realName = realName;
        }
        static avgAge2() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        bio2() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    class Avenger2 {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger2.avgAge = 35;
    console.log(Avenger.avgAge2);
    const antman = new Avenger("AntMan", "Avengers", "Scott Lang");
    console.log(Avenger.avgAge);
    console.log(antman);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor de clase Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("constructor xmen llamado");
        }
        get fullName() {
            return `${this.name}`;
        }
        getFullNameXmen() {
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipisis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipisis.instance) {
                Apocalipisis.instance = new Apocalipisis("Soy Apocalipsis");
            }
            return Apocalipisis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipisis.callApocalipsis();
    const apocalipsis1 = Apocalipisis.callApocalipsis();
})();
//# sourceMappingURL=main.js.map
"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name,
                this.team = team,
                this.realName = realName;
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
    const antman = new Avenger("AntMan", "Avengers", "Scott Lang");
    console.log(Avenger.avgAge);
    console.log(antman);
})();
//# sourceMappingURL=main.js.map
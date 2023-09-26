"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();

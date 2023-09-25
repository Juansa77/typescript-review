"use strict";
(() => {
    //* ---SOLO VÁLIDO PARA NÚMEROS-----
    //*Establece valores permitidos, si no definimos los valores, serán igual a las posiciones de un array 
    let AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 0] = "min";
        AudioLevel2[AudioLevel2["medium"] = 1] = "medium";
        AudioLevel2[AudioLevel2["max"] = 2] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    //* Enum con definición de valores
    let AudioLevel3;
    (function (AudioLevel3) {
        AudioLevel3[AudioLevel3["min"] = 2] = "min";
        AudioLevel3[AudioLevel3["medium"] = 4] = "medium";
        AudioLevel3[AudioLevel3["max"] = 6] = "max";
    })(AudioLevel3 || (AudioLevel3 = {}));
    //* cuando accedemos, tenemos acceso a lo definido en el enum
    let currentAudio;
    let audioLevel = 10;
})();

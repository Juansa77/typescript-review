(()=>{

    //* ---SOLO VÁLIDO PARA NÚMEROS-----
    //*Establece valores permitidos, si no definimos los valores, serán igual a las posiciones de un array 

    enum AudioLevel2{
        min, medium, max
    }

    //* Enum con definición de valores

    enum AudioLevel3{
        min=2, medium=4, max=6
    }
//* cuando accedemos, tenemos acceso a lo definido en el enum
    let currentAudio: AudioLevel2.medium
    let audioLevel = 10



})()
(()=>{

    //*----PARA AÑADIR PARÁMETROS REST EN TS:NÚMERO INDEFINIDO DE ARGUMENTOS

    //* Hemos definido que la función recibirá un número indefinido de parámetros, se tipa como un array de strings
const fullName= (firstName:string, ...restArgs:string[]):string=>{
    return `${firstName} ${restArgs.join(" ")}` 

}

const superman= fullName("Clark", "Joseph", "Kent")
console.log(superman)
})()
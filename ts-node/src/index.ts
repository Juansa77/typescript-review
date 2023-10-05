import { Hero } from "./interfaces/heroes";
import { genericFunction, genericFunctionArrow, printObject } from "./generics/generics";
import { Villians } from './interfaces/villians';



printObject(123)
printObject(new Date())
printObject({a:1, b:2})
printObject([1,2,3,4,5])
printObject("Hello")

//* Ya que la función es genérica, tenemos acceso los métodos propios de cada tipo de dato de salida
console.log(genericFunction(12).toFixed(2))
console.log(genericFunction(new Date().getMonth))

const deadPool ={
    name:"Deadpool",
    realName: "Wade Wilson",
    dangerLevel: 130
}

//* Aquí hemos definido en la función que el argumento tiene que ser la interfaz Hero

console.log(genericFunctionArrow<Hero>(deadPool))
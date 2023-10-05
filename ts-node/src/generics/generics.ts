export const printObject =(argument:any)=>{
    console.log(argument)
}


//* Para definir una función genérica se pone <> la letra da igual, pero suele ser T
//* Cuando la hemos definido como genérica, tendremos acceso a los métodos propios de cada tipo de dato 
export function genericFunction<T>(argument: T):T{
    return argument
}

//* Generic function arrow function
export const genericFunctionArrow = <T>(argument:T)=>{
 return argument
}


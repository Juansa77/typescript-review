(()=>{
//* Si no lo tipamos, TS lo infiere como arreglo de números o tupla
    const numbers = [1,2,3,4,5,6,7,9,9,10]
//* Si intentamos pushear un valor diferente, no lo permite
 //   numbers.push("prueba")
//* Un array se puede tipar con varios tipos de datos
 const moreNumbers: (string|number|boolean)[] = [1,2,3,4,5,6,7,9,9,10]
})()
(()=>{
//* También hay que tipar los argumentos. Si lo tipamos así TODOS LOS ARGUMENTOS SON OBLIGATORIOS
const fullName = (firstName:string, lastName:string)=>{
    return `${firstName} ${lastName}`
}
//* También se pueden tipar los argumentos con dos tipos
const fullName2 = (firstName:string, lastName:(string|boolean))=>{
    return `${firstName} ${lastName}`
}
const name = fullName("Tony", "Stark")

console.log({name})

})()
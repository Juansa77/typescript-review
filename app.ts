const msg:string = "Hello world";

const loquesea= {
    name:"Juansa",
    age:"45"
}

//*----TIPOS INFERIDOS POR TS


//?------------ String y numbers----------
//* Al ser una constante, TS infiere que a es 10
const a = 10
//* al ser una variable, TS infiere que es de tipo STRING
let b =10
//* Tipo any
let c;
//* En una función, si no tipamos lo infiere como tipo Any
const sayHello = (message:string)=>{
    console.log(message)
}

//?------------ FUNCIÓN ANÓNIMA AUTOINVOCADA----------

(()=>{
    const d:string= "console log de función autoinvocada"
    console.log(d)
})()


console.log(msg, loquesea.age)
(() => {
    const addNumbers = (a: number, b: number) => 
        a + b
    

    const greet = (name: string) => 
        `Hola ${name}`
    

    const saveTheWorld = () => 
        "World is saved"
    
//* Tipamos la varaible como tipo función
    let myFunction: Function

 //* Tipado de función con retorno impplícito: Hemos tipado una variable como una función que debe retornar un number
 
 let myFunction2 :(a:number, b:number)=> number 

//* Asignamos addNumbers a myfunction y TS es capaz de inferir el tipo
    myFunction =addNumbers
    //* Aquí lo infiere que es una suma de Numbers
    console.log(myFunction)

    console.log(myFunction(1, 2))
//* Cambiamos la asignación
    myFunction= greet
//* Aquí infiere que retorna un string
    console.log(myFunction("Fernando"))
})()
(() => {

    //* Tipado específico de objeto (también se puede poner Object)
    //* Hemos definido getName como parámetro opcional con ?, además tendrá los argumentos void y retorno string
    let flash:{name:string, age:number, powers:string[], getName?:()=> string} = { 
    name: "Barry Allen", 
    age: 24,
    powers: ["Speed", "Time travel"]

}


//* Si queremos añadir un nuevo parámetro al objeto, nos marcará un error 


flash={
    name: "Barry Allen", 
    age: 24,
    powers: ["Speed", "Time travel"],
    getName(){
        return this.name
    }
}


console.log(flash)

})()
(()=>{
    const hero:string ="Batman";
    //* En las funciones se tipa el tipo de valor esperado. El tipado en la función es el que decide el tipo de valor de retorno
    const returnName=():string=>{
        return hero
    }
    console.log(typeof returnName)
})()

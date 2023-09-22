(()=>{
    const batman:string ="batman"
    const daredevil:string =`Daredevil`

    //* Este OR se transpilará a JS con un OR y un ternario complejo
    
    console.log(batman[10]?.toUpperCase || "no hay ese index")
})()
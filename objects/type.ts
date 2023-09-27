(() => {

//* Type: exclusivo de TS, no tiene equivalente en JS
    type Hero ={
        name:string,
        age:number,
        powers: string[],
        getName?: ()=>string

    }
//* Aquí tipamos a Flash directamente con un tipo, así que lo tenemos referenciado con el tipo Hero
    let flash:Hero = { 
    name: "Barry Allen", 
    age: 24,
    powers: ["Speed", "Time travel"]

}


let superman:Hero = { 
    name: "Clark Kent", 
    age: 60,
    powers: ["Speed", "Force", "Fly"],
    getName(){
        return this.name
    }

}




console.log(flash)

})()
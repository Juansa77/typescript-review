(()=>{

    //* Uan interface se declara igual que un tipo pero sin el IGUAL. La diferencia es que una interface tiene EXTENDS
    interface Hero {
        name:string,
        age:number,
        powers: string[],
        getName?: ()=>string

    }

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

})()
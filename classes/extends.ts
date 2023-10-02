(()=>{
    class Avenger{
        constructor(
public name:string,
public realName: string,

        ){
            console.log("Constructor de clase Avenger llamado")
        }

        //*  creamos función privada dentro de clase 
        private getFullName(){
            return `${this.name} ${this.realName}`
        }
    }
//* Al crear una clase extend, tienes que llamar a super para pasarle los argumentos
    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){super(name, realName)
        console.log("constructor xmen llamado")}

       //* Un GETTER es un método, no una propiedad, pero se ejecuta como una propiedad 
        get fullName(){
            return `${this.name}`
        }
        getFullNameXmen(){
         
        }

        //** Un SETTER RECIBE UN ARGUMENTO OBLIGATORIO Y SOLO UNO */
set fullName(name:string){
    this.name= name

}

        
    }


    const wolverine = new Xmen("Wolverine", "Logan", true)
    //* Lámando al get
    console.log(wolverine.fullName)
})()
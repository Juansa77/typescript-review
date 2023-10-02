(() => {

    //* Las clases abstractas sirven para crear otras clases con extend, no se pueden crear nuevas instanciasd 
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string

        ) { }
    }
class Xmen extends Mutante{}
class Villians extends Mutante{
    conquistarMundo(){
        return "Mundo conquistado"
    }
}
    const wolverine =new Xmen("Wolverine", "Logan")
    const magneto = new Villians("Magneto", "Eric")
//* Creación de una función que recibe una clase abstracta como argumento
    const printName =(character:Mutante)=>{
        console.log(character.realName)
    }

})()
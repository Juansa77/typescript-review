(()=>{
//* Un constructor privado sirve para controlar como son ejecutadas las instancias

class Apocalipisis{

    static instance: Apocalipisis
    private constructor(
        public name:string
    )
    {}

    //* Aqu´instanciacmos el valor permitido para la clase
    static callApocalipsis():Apocalipisis{
        if(!Apocalipisis.instance){
            Apocalipisis.instance =new Apocalipisis("Soy Apocalipsis")
        }

        return Apocalipisis.instance

    }

    changeName (newName: string){
        this.name= newName

    }
}

//* crear una nueva instancia private

const apocalipsis = Apocalipisis.callApocalipsis()

const apocalipsis1 = Apocalipisis.callApocalipsis()
})()
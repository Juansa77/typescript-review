(()=>{

    //* En la interface no se implementa el código de las funciones
    interface Xmen{
        name:string,
        realName:string,
        mutantPower(id:number):string
    }

    //* Las interfaces no se extienden respecto a la clase, se impomentan
interface Human {
    age:number
}
    class Mutant implements Xmen, Human {

        public age:number;
        public name:string;
        public realName: string;
        mutantPower(id: number) {
            return this.name
        }

    }

    
})()
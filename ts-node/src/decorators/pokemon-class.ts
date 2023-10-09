const printToConsole = (constructor: Function) => {
  console.log(constructor);
};
//* Este es el decorador, que se ejecuta cuando se define la clase SIEMPRE EN EL MOMENTO DE TRANSPILACION

//* Decorador condicional

const printToConsoleCondicional = (print: boolean = false): Function => {
  if (print == true) {
    return printToConsole;
  } else {
    return () => {};
  }
};

//* Función para prevenir la expansión de clases

const blockPrototype = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//* FACTORY DECORATOR: función que retorna otra función

const checkValidPokemonId = () => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //* con descriptor.value puedo cambiar el retorno de la función a lo que apuntamos
    //? descriptor.value=()=> console.log("esto es nuevo")
    const originalMehotd = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        console.error("Ese pokemos no existe");
      } else {
        return originalMehotd(id);
      }
    };
    console.log({ target, propertyKey, descriptor });
  };
};

//* Decorador para poner propiedades privadas

const readOnly = (isWriteable: boolean = true): Function => {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
      },
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWriteable,
        });
      },
    };
    return descriptor;
  };
};

@blockPrototype
@printToConsoleCondicional(true)
@readOnly()
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`pokemon guaradado con index ${id}`);
  }
}

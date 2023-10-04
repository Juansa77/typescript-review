import powers from "../data/powers"

powers

export class Hero {
    constructor(
        public name:string,
        public powerID: Number,
        public age: number
        ){}

        get power():string{// retunr string
            return powers.find(power=> power.id === this.powerID)?.desc|| "Not found"
        }

    
}

export class Hero2 {
    constructor(
        public name:string,
        public powerID: Number,
        public age: number
        ){}

    
}

export class Hero3 {
    constructor(
        public name:string,
        public powerID: Number,
        public age: number
        ){}

    
}
export class Ingredients {
    constructor(public name: string, public amount: number) {}
}

//--------------- Above code is equivalent to the below lines of code-----------
// export class Ingredients {
//     public name:string;
//     public amount:number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }
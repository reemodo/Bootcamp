import  { IPerson } from "./Person.interface"
import { Hobby } from "./Hobby"
export class Person implements IPerson{
    name: string
    age: number
    height: number
    hobbies: Hobby[]
    weight: number
    constructor(name: string, age: number, height: number,weight: number,hobbies:Hobby[]){
        this.name= name
        this.age= age
        this.height= height
        this.hobbies= hobbies
        this.weight= weight
    }
    grow() : void{
        this.age++;
    }
    loseWeight(value: number): void {
        this.weight -= value;
    }
    addHobby(hobby: Hobby): void {
        this.hobbies.push(hobby);
    }
    getHobbiesNames():string[]{
        return this.hobbies.map(hobby => hobby.hobbyName)
    }
}

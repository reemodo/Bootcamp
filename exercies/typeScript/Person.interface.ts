import { Hobby } from "./Hobby"
export interface IPerson {
    name: string;
    age: number;
    height: number
    hobbies: Hobby[];
    weight: number;
    grow : () => void;
    loseWeight: (value: number)=> void
    addHobby:(hobby: Hobby)=> void 
    getHobbiesNames:()=>string[]
}


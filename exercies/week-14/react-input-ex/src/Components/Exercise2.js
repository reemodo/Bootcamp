import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    const handelfruit =  (newFruit) =>{
        setFruit(newFruit)
        console.log(name+ " selected " +newFruit)
    }
    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => handelfruit(e.target.value)} value={fruit}>
                <option value="banana">banana</option>
                <option value="apple">apple</option>
            </select>
            <div>{name} selected {fruit}</div>
        </div>
    );
}
export default Exercise2;
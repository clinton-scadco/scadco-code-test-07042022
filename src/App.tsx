import React, { useState } from "react";

export const App = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [count, setCount] = useState(0);
    const [namesList, setNamesList] = useState([]);
    const [selectedName, setSelected] = useState("");

    const inc = () => {
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count - 1);
    };

    const addNames = () => {
        setNamesList([...namesList, surname + ", " + name]);
    };

    const selectedItem = (e) => {
        setSelected(e.target.value);
        var [tempSurname, tempName] = e.target.value.split(",");
        setName(tempName);
        setSurname(tempSurname);
    };

    return (
        <div>
            <select value={selectedName} onChange={selectedItem}>
                {namesList.map((name, index) => (
                    <option key={index} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <button type="button" onClick={addNames}>
                Create
            </button>
            <button></button>

            {/* <input type="text" onChange={(e) => setName(e.target.value)} />
            {name}
            <button onClick={inc}>click me {count}</button> */}
        </div>
    );
};

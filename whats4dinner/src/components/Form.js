import React from "react";
import { useState } from "react";
import browserTool from './BrowserTool';

 


export default function Form() {
    const [inputs, setInputs] = useState([]);

    const handleFormChange = (index, event) => {
        let data = [...inputs];
        data[index][event.target.name] = event.target.value;
        setInputs(data);
    }
    const addFields = () => {
        let newfield = [];
        setInputs([...inputs, newfield]);
    }
    const submit = (e) => {
        e.preventDefault();
        browserTool(inputs.join(" "));
    }
    const removeFields = (index) => {
        let data = [...inputs];
        data.splice(index, 1);
        setInputs(data);
    }

    return (
        <form onSubmit={submit} className="Form">Hello!
         {inputs.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='ingredientName'
                placeholder='ingredientName'
                value={input}
                onChange={event => handleFormChange(index, event)}
              />
            <button onClick={addFields}>Add More..</button>
            <button onClick={() => removeFields(index)}>Remove</button>
            <button onClick={submit}>Submit</button>
            </div>
            )
        })}
        </form>
    )
}
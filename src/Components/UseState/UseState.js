import { useState } from "react";

export function TextInput2(params) {
    const [value, setValue] = useState("Rodrigo")

    function handleOnChange(e) {
        setValue(e.target.value)        
    }

    return (
        <input type="text" value={value} onChange={handleOnChange}></input>
    )
    
}
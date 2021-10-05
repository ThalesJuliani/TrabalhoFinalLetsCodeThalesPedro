import { useState } from "react";
import { TextInput } from "./Components/TextInput";

function App() {

const [nome, setName] = useState ('Andréia')

  return (
    
    <div>
     <TextInput value={nome} onChangeValue={setName} />
   
    <p> Olá Mundo </p>  
    </div>
  );
}

export default App;

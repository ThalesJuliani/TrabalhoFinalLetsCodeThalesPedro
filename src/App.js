import { useState } from "react";
import { TextInput } from "./Components/TextInput";
import { Input } from ".Components/Input";



function App() {

const [nome, setName] = useState ('Andréia e Thales e Sophie')

  return (
    
    <div>
     <TextInput value={nome} onChangeValue={setName} />
     <a href="http: www.google.com" target="_blank">Link</a>
   
    <p> Olá Mundo 222 </p>  
    </div>
  );
}

export default App;

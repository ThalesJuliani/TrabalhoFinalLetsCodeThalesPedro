import { useState } from "react";
import { TextInput } from "./Components/TextInput";

function App() {

const [nome, setName] = useState ('Andréia e Thales')

  return (
    
    <div>
     <TextInput value={nome} onChangeValue={setName} />
     <a href="http: www.google.com" target="_blank">Link</a>
   
    <p> Olá Mundo 222 </p>  
    </div>
  );
}

export default App;

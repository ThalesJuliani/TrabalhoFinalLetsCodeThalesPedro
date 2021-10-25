import { useState } from "react";
import { TextInput } from "./Components/TextInput";
import { Input } from "./Components/Input";
import {CanDrive} from "./Components/CanDrive"



function App() {

const [nome, setName] = useState ('Andréia e Thales e Sophie')
const [value, setValue] = useState ('Vancouver')
const [age, setAge] = useState ('21')



  return (
    
    <div>
     <TextInput value={nome} onChangeValue={setName} />
     
     <Input type="text" value={value} onChangeValue={setValue} />

     <CanDrive age = {value} />
   
    <p> Olá Mundo 222 </p>  

    <a href="http: www.google.com" target="_blank">Link</a>

    </div>
  );
}

export default App;

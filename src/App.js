import { useState } from "react";

import Lojinha from "./Lojinha";

import Menu from './Menu';

function App() {

  const [ login, setlogin] = useState(false);
  
  
  return (
    <div className="App">
  <Menu/>
    {
      login == false ?
       <>
          <p> Faça login para continuar </p>
          <button onClick= {()=> setlogin (true)}> Logar </button>
      </>    
      :
        
        <Lojinha setlogin={setlogin}/>
        
    }
    
    </div>
  );
  
}

export default App;


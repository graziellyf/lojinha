import { useState } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Lojinha from "./Lojinha"
import Menu from './Menu';

function App() {

  const [ login, setlogin] = useState(false);
  
  
  return (
    <div className="App">

    <ToastContainer/>

  <Menu/>

  <div className="container">
  {

      login == false ?
      <>
         <p> Faça login para continuar </p>
         <button className="btn btn-dark" onClick= {()=> setlogin (true)}> Logar </button>
      </>    
:
  
  <Lojinha setlogin={setlogin}/>
  
}
  </div>

    
    
    </div>
  );
  
}

export default App;


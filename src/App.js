import React from 'react'
import { Info } from './components/Info';

function App() {
  return (
    <div className="App">
     <Info label='Nome:' value='Pedro Andrade' />
     <Info label='Telefone:' value='(45) 99108-4192' />
    </div>
  );
}

export default App;

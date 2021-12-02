import React, { Component, useState } from 'react';

import Navbar from './navbar/navbar';
import Navigate from './navbar/navigate'
import { Context } from './context/context';


function App() {
  
    
    const [context, setContext] = useState(false);

    return (
      <div>
        <Context.Provider value={[context, setContext]}>
          <Navbar />
          <Navigate />
        </Context.Provider>

      </div>
    );
  
}

export default App;
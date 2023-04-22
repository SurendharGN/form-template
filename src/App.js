
import React, { createContext } from 'react';
import { Routes,Route } from 'react-router-dom';
import Success from './pages/success';
import { Main } from './components/Main';

function App() {

    

  return (

            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/Success' element={<Success/>}></Route>

            </Routes>
    
        
    
  );
}

export default App;
// libraries used: time-picker, date-picker, react-hook-form, yup, 
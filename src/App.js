import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Comingsoon from './components/Comingsoon';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Comingsoon/>}>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;

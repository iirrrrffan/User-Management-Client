import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/sign/Sign';
import Log from './pages/log/Log';
import Update from './pages/update/Update';
import { createContext } from 'react';

const ThemeContext = createContext(null);


function App() {
  return (
    <div className="App">
      <Routes>
   <Route path='/' element={<Sign/>}/>
   <Route path='/log' element={<Log/>}/>
   <Route path='/update' element={<Update/>}/>
   </Routes>
     
    </div>
  );
}

export default App;

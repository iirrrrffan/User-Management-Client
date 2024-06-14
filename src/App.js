import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/sign/Sign';
import Log from './pages/log/Log';
import Update from './pages/update/Update';
import ShowUsers from './pages/showUsers/ShowUsers';

function App() {
  return (
    <div className="App">
      <Routes>
   <Route path='/' element={<Sign/>}/>
   <Route path='/log' element={<Log/>}/>
   <Route path='/update' element={<Update/>}/>
   <Route path='/showuser' element={<ShowUsers/>}/>
   </Routes>
     
    </div>
  );
}

export default App;

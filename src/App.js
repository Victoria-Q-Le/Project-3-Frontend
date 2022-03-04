import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home';
// import Edit from './views/Edit';

function App() {

  


  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/editNotes/:id' element={<Edit/>}/> */}
          
        </Routes>
    </div>
  );
}

export default App;

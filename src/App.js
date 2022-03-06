import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import Edit from './views/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {




  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/editNote/:id' element={<Edit/>}/>

        </Routes>
    </div>
  );
}

export default App;

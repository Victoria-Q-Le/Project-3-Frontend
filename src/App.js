import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [newnote, setNewnote] = useState('')

  const hanldeNewNoteChange = (event) =>{
    setNewNote(event.target.vaule);
  }

  return (
    <main>
        <h1>Noted</h1>

    </main>
  );
}

export default App;

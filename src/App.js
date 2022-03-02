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
          <section>
            <h2>Send a positive messege to a stranger</h2>
            <form>
                  User: <input type='text' /><br/>
                  Note: <input type='text' onChange={hanldeNewNoteChange}/><br/>
                  <input type='submit' vaule='Send Love' onChange={handleNewNoteFormSubmit}/>
            </form>





          </section>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App() {

  const [newDescription, setNewDescription] = useState('')

  const hanldeNewDescriptionChange = (event) =>{
    setNewDescription(event.target.value);
  }

  const handleNewDescriptionFormSubmit = (event) => {
        event.preventDefault();
        axios.post(
          'http://localhost:3000/notes',
          {
            description:newDescription
          }
        )
  }

  useEffect(()=>{
    axios
          .get( 'http://localhost:3000/notes')
          .then((response)=>{
                  console.log(response);
          })
  },)

  return (
    <main>
        <h1>Noted</h1>
          <section>
            <h2>Send a positive messege to a stranger</h2>
            <form onSubmit={handleNewDescriptionFormSubmit}>
                  User: <input type='text' /><br/>
                  Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                  <input type='submit' value='Send Love'/>
            </form>





          </section>
    </main>
  );
}

export default App;
